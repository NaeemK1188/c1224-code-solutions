import express from 'express';

const app = express();

// the server output or response on server-side when the client initiate request
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

app.get('/', (req, res, next) => {
  // console.log('Hello, World!');
  console.log('The date is', new Date());
  console.log('Request method:', req.method);
  console.log('Request path:', req.path);
  res.send('default page');

  next();
});

// app.listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });

app.get('/notes', (req, res, next) => {
  // console.log('Hello, World!');
  console.log('The date is', new Date());
  console.log('Request method:', req.method);
  console.log('Request path:', req.path);
  res.send('viewing notes');

  next();
});

// app.listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });

// inside notes get the note with an id 42 or like viewing certain note on the web browser
app.post('/notes/:noteId', (req, res, next) => {
  // console.log('Hello, World!');
  const { noteId } = req.params;
  console.log('The date is', new Date());
  console.log('Request method:', req.method);
  console.log('Request path:', req.path);
  res.send(noteId); // what is in the webpage or the contents of the webpage, which will show 42

  next();
});
// .listen is only applied at the bottom. only one listen for all the express http requests
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
