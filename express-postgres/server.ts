import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg'; // letting node.js abd express to add SQL code into the javascript

// setting up connection object to be connected to pagila database
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila', // postgres URL
  ssl: {
    // @ connecting to host to connect to postgres server and / database name
    rejectUnauthorized: false, // allow non-ssl traffic to localhost
  },
});

// this approach when we dont have sql query
// type Film = {
//   filmId: number;
//   title: string;
// };

const app = express();

// route 1 or first API endpoint
app.get('/api/films', async (req, res, next) => {
  try {
    // adding limit to the query to see the behavior of the data
    // desc goes from top to bottom
    // select already returning
    const sql = `select * from "films"
                 order by "replacementCost" desc
                 limit 100; `;

    const result = await db.query(sql);
    const films = result.rows; // returns all the rows or all the films not just one film .rows[0]
    // if (films === undefined)
    // {
    //   throw new ClientError(400, "film entry is required");
    // }
    res.send(films);
  } catch (error) {
    next(error);
  }
});

// route 1 or second API endpoint
app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params; // params are always strings and because /:filmId is string from line 52
    // client error !Number.isInteger(+filmId) if the number is not integer throw the error
    if (!Number.isInteger(+filmId) || Number(filmId) < 1) {
      // if film id
      throw new ClientError(400, 'No film id was provided'); // its not outputted when we do films/ ?
    }
    // else
    const sql = `select * from "films"
                where "filmId" = $1;`;
    const params = [filmId]; // array of column values in a table matched up with $1, $2,...
    // params is unrelated to the req.params
    // or .query(sql, [filmId])
    const result = await db.query(sql, params); // express replaces params by the $1 that is queried in client side
    const film = result.rows[0]; // returning only one film
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (error) {
    next(error);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;
    if (filmId === undefined || Number(filmId) < 1) {
      throw new ClientError(400, 'No film ID was provided');
    }

    if (title === undefined) {
      throw new ClientError(400, 'content is required');
    }
    // else
    // this approach when we don't have sql query
    // const film:Film = {
    //   filmId: +filmId,
    //   title: String(content), // we there is String() ?
    // }
    // $2 is the second in array where the order matter
    const sql = `update "films"
                set "title" = $2
                where "filmId" = $1
                returning *;`; // if we forgat returning, the update does not show any return
    // and the server thinks its an error throwing error 404
    const params = [filmId, title]; // array of all values
    // or .query(sql, [filmId, title])
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `Film ${filmId} was not found `);
    }
    res.send(film);
  } catch (error) {
    next(error);
  }
});

// error middleware at the end of endpoints
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

// console.log(ClientError);
