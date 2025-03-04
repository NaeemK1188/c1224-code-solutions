import { NextFunction, Request, Response } from 'express';
import { ClientError } from './client-error.js';

// if its a middleware with 4 arguments, its an error middleware. less arguments its normal middleware
// they have to be in this order to be recognized
// this function is called by express
export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- next must be declared for error middleware
  next: NextFunction
): void {
  if (err instanceof ClientError) {
    // .json() put response in json format
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    // we dont send back to client what was happened
    res.status(500).json({ error: 'an unexpected error occurred' });
    // we dont have next then response is sent
  }
}
