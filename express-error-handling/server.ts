import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js'; // we need to put the file with extension in node

type Note = {
  noteId: number;
  content: string;
};

const app = express();

// we need to pass the error using next to be passed to the next middleware to be handles
//
app.get('/api/notes', async (req, res, next) => {
  // always catch error using try/catch to avoid getting hacked
  try {
    const notes = await readNotes();
    res.send(notes);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    // why we are doing that instead ? because its already written in error-middleware.ts
    next(err); // err is from error-middleware.ts
    // when passing err in next, this will pass the error to other errorMiddleware to be handled and we put it at te end
  }
});

app.post('/api/notes', async (req, res, next) => {
  try {
    const { content } = req.query; // when

    if (content === undefined) {
      // if no content, we will get this error
      // res.status(400).send({ error: 'content is required' });
      // return;
      // (status, message)
      // throw new ClientError(res.status(400), res.send('content is required'));
      throw new ClientError(400, 'content is required');
    }
    // else or if the content are defined
    const note = {
      noteId: Math.floor(100 * Math.random()),
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    // why we are doing this instead ?
    next(err);
  }
});

app.put('/api/notes/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params; // if the ::noteId not in the path, we will get error here in noteId
    const { content } = req.query;
    if (Number(noteId) < 1) {
      // res.status(400).send({ error: 'noteId is required' });
      // return;
      throw new ClientError(400, 'note id must be a positive integer');
    }
    if (content === undefined) {
      // res.status(400).send({ error: 'content is required' });
      // return;
      throw new ClientError(400, 'content is required');
    }

    const note = {
      noteId: +noteId,
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    // why we are doing this instead ?
    next(err);
  }
});

// we can make our end-point does whatever we want. this is an endpoint, API or route
app.delete('/api/notes/:noteId', async (req, res, next) => {
  try {
    // execute the code but be prepared to any error, that will be catch
    const { noteId } = req.params; // everything after ? in URL
    if (noteId === undefined) {
      // res.status(400).send({ error: 'noteId is required' });
      // return;
      throw new ClientError(400, 'noteId is required');
    }
    await deleteNote(+noteId);
    res.send(`deleted ${noteId}`);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    // why we are doing this instead ?
    next(err);
  }
});

app.use(errorMiddleware); // calling errorMiddleware in error-middleware.ts

app.listen(8080, () => {
  console.log('listening on port 8080');
});

//* **** Mock data handling functions

async function readNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve([
            { noteId: 8, content: 'Error handling middleware is great' },
            { noteId: 12, content: 'Express is easy!' },
            { noteId: 3, content: 'Simplicity itself' },
          ])
        : reject(new Error('What bad luck! Read error.')); // this error on the server side when the math.random is > 0.5
    }, 10);
  });
}

async function writeNote(note: Note): Promise<Note> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(note)
        : reject(new Error('What bad luck! Write error.'));
    }, 10);
  });
}

async function deleteNote(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(id)
        : reject(new Error('What bad luck! Delete error.'));
    }, 10);
  });
}
