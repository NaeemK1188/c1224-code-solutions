import express from 'express';

const app = express();

// the server output or response on server-side when the client initiate request
// parameters comes in position, so if we delete req, typescript will think res is req because it
// came first in (res, next)
// if we put the .use() block of code at the end, it wont get executed only when its undefined the id number
app.use((req, res, next) => {
  // console.log('Hello, World!');
  console.log('The date is', new Date());
  console.log('Request method:', req.method);
  console.log('Request path:', req.path);

  next();
});

// app.listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });

// we don't have to put next() because we are sending response to client
// next() only applied in use()
app.get('/', (req, res) => {
  // console.log('Hello, World!');
  console.log('home page');
  res.send('default page');
});

// app.listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });

app.get('/notes', (req, res) => {
  // console.log('Hello, World!');
  console.log('viewing notes page');
  res.send('viewing notes');
});

// app.listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });

// inside notes get the note with an id 42 or like viewing certain note on the web browser
// .post("path", (takes arrow function) => {})
app.post('/notes/:noteId', (req, res) => {
  // console.log('Hello, World!');
  const { noteId } = req.params;
  // we don't call next on put or post http requests
  console.log('adding new note id');
  res.send(`got a note ${noteId}`); // what is in the webpage or the contents of the webpage, which will show 42
  // res is sent to client
  // or res.send(req.params.noteId) and removing line 50
  // res.send(); ends the execution
});
// .listen is only applied at the bottom. only one listen for all the express http requests
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
