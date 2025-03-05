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

app.post('/api/actors', async (req, res, next) => {
  try {
    console.log('received data:', req.body);
    if (!req.body.firstName || !req.body.lastName) {
      throw new ClientError(400, 'BAD REQUEST');
    }
    // else
    const sql = `insert into "actors" ("firstName", "lastName")
                values ($1, $2)
                returning *;`; // everything else(other columns) will be added automatically with the insert

    const params = [req.body.firstName, req.body.lastName]; // can be used as parameters
    const result = await db.query(sql, params);
    // res.json(result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
