import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Todo = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `select * from "products"
                 order by "productId" `;
    const result = await db.query<Todo>(sql);
    // const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId) || Number(productId) < 1) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    // else
    const sql = `select * from "products"
                  where "productId" = $1;`;
    const params = [productId];
    const result = await db.query(sql, params);
    const product = result.rows[0];
    if (!product) {
      throw new ClientError(404, `productId:${productId} NOT FOUND`);
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// app.post('/api/todos', async (req, res, next) => {
//   try
//   {
//     const { task, isCompleted = false } = req.body;
//     if (!task || typeof isCompleted !== 'boolean')
//     {
//       throw new ClientError(400, 'task and isCompleted are required');
//     }
//     const sql = `
//       insert into "todos" ("task", "isCompleted")
//         values ($1, $2)
//         returning *
//     `;
//     const params = [task, isCompleted];
//     const result = await db.query<Todo>(sql, params);
//     const [todo] = result.rows;
//     res.status(201).json(todo);
//   }
//   catch (err)
//   {
//     next(err);
//   }
// });

// app.put('/api/todos/:todoId', async (req, res, next) => {
//   try
//   {
//     const todoId = Number(req.params.todoId);
//     if (!Number.isInteger(todoId) || todoId < 1)
//     {
//       throw new ClientError(400, 'todoId must be a positive integer');
//     }
//     const { task, isCompleted } = req.body;
//     if (typeof isCompleted !== 'boolean')
//     {
//       throw new ClientError(400, 'isCompleted (boolean) is required');
//     }
//     const sql = `
//       update "todos"
//         set "updatedAt" = now(),
//             "isCompleted" = $1,
//             "task" = $2
//         where "todoId" = $3
//         returning *
//     `;
//     const params = [isCompleted, task, todoId];
//     const result = await db.query<Todo>(sql, params);
//     const [todo] = result.rows;
//     if (!todo) {
//       throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
//     }
//     res.json(todo);
//   }
//   catch (err)
//   {
//     next(err);
//   }
// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
