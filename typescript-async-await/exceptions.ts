import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;


// using Promise
// chaining is hard to read
// function throwOnce(): Promise<void>
// { // change to true to see the
//   return read('foo', false)
//     .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
//     .catch((error) => console.log(elapsed(), 'throwOnce Error:', error));
// }

// using async/await with try/catch
async function throwOnce():Promise<void>
{
  try
  {
    const msg = await read('foo', true);
    console.log(elapsed(), 'throwOnce:', msg );
  }

  catch(error)
  {
    console.log(elapsed(), 'throwOnce Error:', error );
  }
}

// using Promise
// function throwSeveral(): Promise<void>
// {
//   return read('foo1', false)
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral1:', msg);
//       return read('foo2', false);
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral2:', msg);
//       return read('foo3', false);
//     })
//     .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
//     .catch((error) => console.log(elapsed(), 'throwSeveral Error:', error));
// }


// using async/await with try/catch
async function throwSeveral():Promise<void>
{
  try
  {
  const msg = await read('foo1', true);
  console.log(elapsed(), 'throwSeveral:', msg);
  const msg1 = await read('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', msg1);
  // throw new Error('catching error'); // or we can throw an error here to skip
  const msg2 = await read('foo3', true); // throws an exception, so it jumps directly to catch if its false
  console.log(elapsed(), 'throwSeveral3:', msg2);
  }
  catch(error)
  {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }

}

// using Promise
// function throwChained(): Promise<void>
// {
//   return read('foo-chain', false)
//     .then((msg1) => {
//       console.log(elapsed(), 'throwChained1:', msg1);
//       return read(msg1, false);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'throwChained2:', msg2);
//       return read(msg2, false);
//     })
//     .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
//     .catch((error) => console.log(elapsed(), 'throwChained Error:', error));
// }

// using async/await with try/catch
async function throwChained():Promise<void>
{
  try
  {
    const msg = await read('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg);
    const msg2 = await read(msg);
    console.log(elapsed(), 'throwChained2:', msg2);
    const msg3 = await read(msg2);
    console.log(elapsed(), 'throwChained3:', msg3);
  }
  catch(error)
  {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

// using Promise
// throwOnce()
//   .then(() => throwSeveral())
//   .then(() => throwChained());


// using async/await with try/catch

await throwOnce();
await throwSeveral();
await throwChained();
