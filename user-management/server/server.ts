/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me! */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware, authMiddleware } from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};
type Auth = {
  username: string;
  password: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) {
  throw new Error('TOKEN_SECRET not found in .env');
}

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }

    const hashedPassword = await argon2.hash(password);
    const sql = `insert into "users" ("username", "hashedPassword")
                  values($1, $2 )
                  returning "createdAt","userId","username";`;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const user = result.rows[0];
    res.status(201).json(user);
    /* TODO:
     * Delete the "Not implemented" error.
     * Hash the user's password with `argon2.hash()` (note that this method is async)
     * Insert the user's "username" and "hashedPassword" into the "users" table.
     * Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
     * Catch any errors.
     *
     * Hint: Insert statements can include a `returning` clause to retrieve the inserted row(s).
     */
  } catch (err) {
    next(err);
  }
});

// we dont use authMiddleware in sign in or sign up
app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    // after sending and receiving request body
    const { username, password } = req.body as Partial<Auth>;
    // const response = req.get('Authorization'); // key 'content-type' from the request or extracting headers
    // console.log(response); // check the server terminal for output which is application/json
    if (!username || !password) {
      // is this if the body is missing ?
      throw new ClientError(401, 'missing body request');
    }
    // the select returns the userId and hashed password not the username
    // the username from the body request
    // the sql is the response to request from client
    const sql = `select "userId", "hashedPassword" from "users"
                where "username" = $1;`;

    // the code below after getting the response or sending the response
    // else if user found
    // password from body, but the existing password in database
    const params = [username];
    const result = await db.query(sql, params);
    const user = result.rows[0];
    // now user can access all properties in row[0] in the table rows
    // like user.userId, user.username, or user.createdAt

    if (!user) {
      throw new ClientError(401, 'user does not exist');
    }
    // else if user exists
    // or just (argon2.verify(password, result.rows[0])
    // password is from the body request plain text
    // argon2.verify returns a promise, so we need to await the result
    // verifiedPass receives boolean result
    // or
    // verify(password, result.rows[0].hashedPassword) , but according to AI it does matter the order
    // we cannot use (user.hashedPassword) ?
    const verifiedPass = await argon2.verify(user.hashedPassword, password);

    // if the password does not match
    // or if (argon2.verify(password, result.rows[0].hashedPassword))
    if (!verifiedPass) {
      throw new ClientError(401, 'password does not match');
    }
    // else if password does exist or match
    // extracting the existing userId and the username in the existing users table
    // we must use the same properties that exist in the users table
    const payload = {
      userId: user.userId,
      username, // we don't have username from the response
      // because we are not selecting it in sql query; so we need to use the request's username from the body.
      // note username:username can be username
    };
    const signInToken = jwt.sign(payload, hashKey); // creating token based on userID and username
    // res.json(signInToken);
    // res.json(payload);
    // combining above in one object

    res.json({
      token: signInToken,
      user: {
        userId: payload.userId,
        username: payload.username,
      },
    });
    /* TODO:
     * Delete the "Not implemented" error.
     * Query the database to find the "userId" and "hashedPassword" for the "username".
     * If no user is found,
     *   throw a 401: 'invalid login' error.
     * If a user is found,
     *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
     *   If the password does not match,
     *     throw a 401: 'invalid login' error.
     *   If the password does match,
     *     Create a payload object containing the user's "userId" and "username".
     *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
     *       (see `hashKey` above).
     *     Send the client a 200 response containing an object with 2 keys, "user" and "token",
     *       where "user"'s value is the payload and "token"'s value is the token.
     */
  } catch (err) {
    next(err);
  }
});

// we can add
// app.use(authMiddleware)
// or use it in the middleware parameter area in line below
// we have an extra parameter in out endpoint in line below
app.get('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select *
        from "todos"
        where "userId" = $1
        order by "todoId"
    `; // here we are selecting the todo from the one user own
    // (sql, [req.user?.userId]) instead of doing params and destructuring it at the top
    const result = await db.query(sql, [req.user?.userId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// we are adding authMiddleware in every endpoint that wants to access todos or certain todos
// from database
// adding new todo to an existing user only certain one but using userId
// to indicate this todo is mine not to other users
app.post('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    // we need to put the task and isCompleted in the body request
    const { task, isCompleted = false } = req.body;
    if (!task || typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'task and isCompleted are required');
    }
    // the userId from middleware jwt token, and task, isCompleted from request body
    const sql = `
      insert into "todos" ("userId", "task", "isCompleted")
        values ($1, $2, $3)
        returning *
    `;
    const params = [req.user?.userId, task, isCompleted];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

// we are adding authMiddleware in every endpoint that wants to access todos or certain todos
// from database
// update the todo and making sure im updating my todo
app.put('/api/todos/:todoId', authMiddleware, async (req, res, next) => {
  try {
    const todoId = Number(req.params.todoId);
    if (!Number.isInteger(todoId) || todoId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const { task, isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'isCompleted (boolean) is required');
    }
    // the userId comes from the token from the request and other fields come from the body
    // but the todoId comes from the params from the end point
    const sql = `
      update "todos"
        set "updatedAt" = now(),
            "isCompleted" = $1,
            "task" = $2
        where "todoId" = $3 and "userId" = $4
        returning *
    `;
    const params = [isCompleted, task, todoId, req.user?.userId];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    if (!todo) {
      throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
