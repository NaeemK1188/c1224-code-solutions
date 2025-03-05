import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

// connection is already established
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `select  count(*) as "cities",
                 "countryId", "countries"."name"
                 from "countries" join "cities"
                 using ("countryId")
                 group by "countries"."countryId";`; // group by to something unique where name causes an error

    const result = await db.query(sql);
    const countries = result.rows;
    // or res.send(countries)
    res.json(countries); // send() it sends back res in json
    // but we want to explicitly showing we are sending in json
  } catch (error) {
    next(error);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (!Number.isInteger(+cityId) || cityId === undefined) {
      throw new ClientError(400, `Non integer cityId:${cityId}`);
    }
    // else
    const sql = `select "cityId", "countries"."name" as "country", "cities"."name"
                 from "cities" join "countries"
                 using ("countryId")
                 where "cityId" = $1;`; // we need to filter to get only the one queried by the client
    // if we dont put where, it will always give us an error because
    // the where clause is missing, but it works fine without where in pgweb sever where
    // we can test out queries

    const params = [cityId];
    const result = await db.query(sql, params);
    const country = result.rows[0];
    if (!country) {
      throw new ClientError(404, 'Not Found');
    }
    res.json(country);
  } catch (error) {
    next(error);
  }
});

// leaving middleware error handling at the bottom with the .listen
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
