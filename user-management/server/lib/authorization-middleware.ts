/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) {
  throw new Error('TOKEN_SECRET not found in env');
}
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  /* your code here */
  // if the "authorization return nothing which is why there is .? don't return anything "
  // if the authorization exists, it put "Bearer value of authorization key in first part of the array,
  // and everything else in the second part of the array. So, the second element of the array [1], will be
  // the jwt token

  // simple way of extracting token
  // const authorization = req.get('authorization');
  // const parts = authorization.split('Bearer ');
  // const token = parts[1]; // return second element in the array
  // or faster way down here
  const token = req.get('Authorization')?.split('Bearer ')[1]; // we put space and [1] because we don't have the token yet.
  // The [1] is index 1 in the array of string items ["Bearer ${token}"] that is ${token}. The .split() takes the string
  // value from Authorization key and put it into an array with a pattern
  if (!token) {
    // is the token modified or signed by hashKey
    throw new ClientError(401, 'authentication required');
  }
  // else if it exists
  // the user is from user in the body json where we have token then user: {userId, username}
  // from we got the user ?
  // we cannot get the username from user because in the response we only selecting userId and
  // hashed password. the username only exists in the request body of sign in
  // .user from sign in const user = result.rows[0]; which only include
  // the userId and hashedPassword. But why we cannot use req.hashedPassword ?
  // = payload of the token
  req.user = jwt.verify(token, hashKey) as Request['user']; // ['user'] is from the sign-in selected userId
  // why we used next() ?
  next(); // pass it to the next middleware or next route or api endpoint
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * Note: the space after `Bearer` is important.
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Note: You need the TOKEN_SECRET (see `hashKey` above).
 * Assign the extracted payload to the user property of the req object.
 * Note: The TypeScript for this assignment is best written with a type assertion:
 *   req.user = payload as Request['user'];
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
