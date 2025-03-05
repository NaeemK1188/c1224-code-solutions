import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json()); // parse json request body
// Endpoint for testing if the mutation are correctly applied
// if the request has json this what happens  in line 15
// if content-type === "application/json"
//   content b = JSON.parse(request.body)
//   next() // pass it to other middlewares to handle
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    //  Every route mounted after the JSON middleware will have an object on req.body
    // if the request has Content-Type equal to application/json. like name=John email=john@example.org
    console.log(req.body); // outputted on server terminal. We can use req.body after adding
    // the express.json() middleware function
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    // res.send()
    res.json(actor); // sending actor as a response
  } catch (err) {
    next(err);
  }
});

// we are trying to create assuming its coming as a json
// /actors end point can be anything but we make it related to the user
app.post('/api/actors', async (req, res, next) => {
  try {
    // these are variable {firstName, lastName} unrelated to sql

    // const {firstName, lastName} = req.body;
    // or
    console.log('received data:', req.body);
    if (!req.body.firstName || !req.body.lastName) {
      throw new ClientError(400, 'Missing body request');
    }
    // or
    // if (!firstName)
    // { throw new ClientError(400, 'Missing body request');}
    // if (!lastName)
    // { throw new ClientError(400, 'Missing body request');}
    // else
    // Insert, it create new entry in the database
    const sql = `insert into "actors" ("firstName", "lastName")
                values ($1, $2)
                returning *;`; // everything else(other columns) will be added automatically with the insert

    const params = [req.body.firstName, req.body.lastName]; // can be used as parameters
    const result = await db.query(sql, params);
    // res.json(result.rows[0]);
    // we need to put .status to get different status code than 200 because
    // if are we only doing res.json(actor), it only shows 200 OK
    // but actually it does not matter, but we need to follow the REST convention
    // regarding status code
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

// responding to request made by client in api endpoint /:actorId
// it tells the server: please update /actorId
app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    console.log('Data received', req.body);
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `non integer actorId: ${actorId}`);
    }

    if (!req.body.firstName || !req.body.lastName) {
      throw new ClientError(400, 'missing body request');
    }
    // else
    const sql = `update "actors"
                 set "firstName" = $2,
                     "lastName" = $3
                 where "actorId" = $1 returning *;`;
    const params = [actorId, req.body.firstName, req.body.lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) {
      // if no actorId, nothing got updated in the database
      throw new ClientError(404, `actorId:${actorId} NOT FOUND`);
    }
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    // console.log("Data received:", req.body);
    const { actorId } = req.params;

    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non integer actorId:${actorId}`);
    }
    // if (!req.body.firstName || !req.body.lastName)
    // {
    //   throw new ClientError(400, "Missing body request")
    // }
    // else
    const sql = `DELETE from "actors"
                 where "actorId" = $1 returning *;`;
    // We are using returning because we care about error 404 not found
    // if we remove it, it will remove the entry, then error with not found although its deleted

    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actorId:${actorId} NOT FOUND`);
    }
    // else
    // we are not sending back anything; only the status code NO content, so we
    // use .sendStatus
    res.sendStatus(204); // sends no body, so returning * wont work and not seeing any body in the response
    // if we use res.json(actor) we get response of deleted content. res.status(200) we will never get a response.
    // we use sendStatus() to get a response with status code
    // we will see the returning * deleted actor when we do res.status(200).json(actor)
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
