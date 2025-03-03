import express from 'express';

const app = express();
// console.log(app);

app.use((req, res, next) => {
  console.log('Hello World!');

  console.log('the date is ', new Date());
  // return next item in the iterator, like a loop where
  // next() is like i++ incrementing the iterator
  next();
});
// listening to client http requests
// method starts the server and binds it to a network `port`
app.listen(8080, () => {
  console.log(`Express server is on listening state on port 8080
    waiting for the incoming requests from the client `);
});
