import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

// Using promise              means no type or no return type in function
// function readOnce(): Promise<void>
// {
//   // the entire msg = read('foo/bar.html') or the  resolve(`read ${url}`) in read.ts
//   return read('foo/bar.html').then((msg) =>
//     console.log(elapsed(), 'readOnce:', msg)
//   );
// }

// using async/await. Await always comes with async
async function readOnce():Promise<void>
{

  const msg = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', msg)

}


// using Promise
// function readSeveral(): Promise<void>
// {
//   return read('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral1:', msg);
//       return read('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral2:', msg);
//       return read('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
// }

// using async/await

async function readSeveral():Promise<void>
{ // no return which is why its Promise<void>, where void is no return type
  const msg = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg);
  const msg1 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg1);
  const msg3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg3);

}

// using Promise
// function readChained(): Promise<void>
// {
//   return read('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'readChained1:', msg1);
//       return read(msg1);
//     })
//     .then((msg2) => { // read read
//       console.log(elapsed(), 'readChained2:', msg2);
//       return read(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
// }

// using async/await
async function readChained():Promise<void>
{
  const msg = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg);
  const msg1 = await read(msg);
  console.log(elapsed(), 'readChained2:', msg1 );
  const msg2 = await read(msg1);
  console.log(elapsed(), 'readChained3:', msg2);

}

// using Promise
// readOnce() // calling readOnce first, then calling readSeveral, and finally calling readChained
//   .then(() => readSeveral())
//   .then(() => readChained());

// using async/await
await readOnce();
await readSeveral();
await readChained();

// the output is overlapping because its not waiting for each function to finish
// readOnce();
// readSeveral();
// readChained();
