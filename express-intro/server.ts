import express from 'express'; // importing express with default naming
// which returns an express function

const app = express(); // from express package that gives us an app to run the express server
// console.log(app);

// use method its attaching middleware
app.use((req, res, next) => {
  console.log('Hello World!');

  console.log('the date is ', new Date());
  // return next item in the iterator, like a loop where
  // next() is like i++ incrementing the iterator
  next(); // runs next middleware
});
// listening to client http requests
// method starts the server and binds it to a network `port`
app.listen(8080, () => {
  // listen() tells express to launch by attaching it to port 8080, then it call its call back
  // and call callback function
  console.log(`Express server is on listening state on port 8080
    waiting for the incoming requests from the client `);
});
