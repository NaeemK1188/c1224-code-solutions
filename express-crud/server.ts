import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

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
    // we can do .query<Grade> for type safety
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades); // sends response with 200 OK
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params; // req.params is from the request URL grades/17(parameter)
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `gradeId is non integer: ${gradeId}`);
    }
    // else
    const sql = `select * from "grades"
                 where "gradeId" = $1;`;
    const params = [gradeId];
    // or (sql, [gradeId])
    const result = await db.query(sql, params);
    const grade = result.rows[0]; // return rows in the database and assign it to grade, probably
    // we don't have any row sense we don't have any matching
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
    //  { name, course, score } are extracted from the body
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'Missing body request');
    }
    // or if (score > 100 || score < 0)
    // we remove + in score because in httpie we added := in request body that converts
    // string json to integer. Httpie converts any key=value pairs to json(string) when we
    // add body at the end: http POST localhost:8080/api/grades/17 name="aim" course="math" score=50
    // so to convert json value to integer we make it score:=50
    if (!Number.isInteger(score) || !(score <= 100 && score >= 0)) {
      throw new ClientError(
        400,
        `score ${score} is not an integer between 0 and 100`
      );
    }
    const sql = `insert into "grades" ("name", "course", "score")
                 values ($1, $2, $3 )
                 returning *;`; // score is an integer not a string
    // returning * it returns row that got be posted. If we forgot the returning *
    // we will get error not found although the database got updated

    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    // send status with body with status
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
    if (!Number.isInteger(score) || !(score <= 100 && score >= 0)) {
      throw new ClientError(
        400,
        `score ${score} is not an integer between 0 and 100`
      );
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
    // the $1, $2, $3, $4 have to be in order in the array in the bottom
    // where gradeId $1 has to be the first in array, name with $2 is the second in the array
    // course with $3 is the third, then finally score with $4 at the end of the array
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
    // only send status without a body
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

// check if the grade ID is valid. throw if not
// adding these functions so we dont make our code dry(repeating ourself)
// function validateGradeId(gradeId:string):void
// {
//    if (!Number.isInteger(+gradeId)) {
//      throw new ClientError(400, `score ${gradeId} is not an integer`);
//    }
// }

// function validateBody(name:string, course:string, score: number | string):void
// {
//    if (!name || !course || !score) {
//      throw new ClientError(400, 'Missing body request');
//    }
//    if (!Number.isInteger(score) || !(+score <= 100 && +score >= 0)) {
//      throw new ClientError(
//        400,
//        `score ${score} is not an integer between 0 and 100`
//      );
//    }
// }

// function validateGrade(grade:Grade, gradeId:string | number)
// {

// }
