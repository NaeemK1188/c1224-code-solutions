import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

function throwOnce(): Promise<void>
{
  return read('foo', true)
    .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
    .catch((error) => console.log(elapsed(), 'throwOnce Error:', error));
}
// chaining is hard to read
function throwSeveral(): Promise<void>
{
  return read('foo1', true)
    .then((msg) => {
      console.log(elapsed(), 'throwSeveral1:', msg);
      return read('foo2', true);
    })
    .then((msg) => {
      console.log(elapsed(), 'throwSeveral2:', msg);
      return read('foo3', true);
    })
    .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
    .catch((error) => console.log(elapsed(), 'throwSeveral Error:', error));
}

function throwChained(): Promise<void>
{
  return read('foo-chain', true)
    .then((msg1) => {
      console.log(elapsed(), 'throwChained1:', msg1);
      return read(msg1, true);
    })
    .then((msg2) => {
      console.log(elapsed(), 'throwChained2:', msg2);
      return read(msg2, true);
    })
    .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
    .catch((error) => console.log(elapsed(), 'throwChained Error:', error));
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
