import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// app.use((req, res, next) => {
//   console.log("the date is ", new Date());
//   console.log("request method", req.method);
//   console.log("request path", req.path);
//   next();
// });

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades";`;
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades); // sends response with 200 OK
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `gradeId is non integer: ${gradeId}`);
    }
    // else
    const sql = `select * from "grades"
                 where "gradeId" = $1;`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId:${gradeId} NOT FOUND`);
    }
    res.json(grade);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    console.log('Data Received:', req.body);
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'Missing body request');
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `score ${score} is not an integer`);
    }
    const sql = `insert into "grades" ("name", "course", "score")
                 values ($1, $2, $3 )
                 returning *;`; // score is an integer not a string

    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    res.status(201).json(grade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    console.log('Received Data', req.body);
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'Missing body request');
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `score ${score} is not an integer`);
    }
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `score ${gradeId} is not an integer`);
    }
    const sql = `update "grades"
                 set "name" = $2,
                      "course"=$3,
                      "score"=$4
                 where "gradeId"=$1 returning *;`;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId:${gradeId} NOT FOUND`);
    }
    res.json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `score ${gradeId} is not an integer`);
    }
    const sql = `delete from "grades"
                where "gradeId" = $1 returning *;`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId:${gradeId} NOT FOUND`);
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
