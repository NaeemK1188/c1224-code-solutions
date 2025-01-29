/**
 * Simulates a network call by delaying for one second and returning a message.
 * If `doResolve` is truthy, it will resolve the Promise, otherwise it will reject.
 * Uses `setTimeout` to mimic a slow network connection.
 */                               // we did true to solve the errors in awaits.ts where read() because it requires 2 parameters
export function read(url: string, doResolve = true): Promise<string> // return a promise object with a string type
{
  return new Promise((resolve, reject) => {
    return setTimeout(() =>
      doResolve
          ? resolve(`read ${url}`)
          : reject(new Error(`rejected ${url}`)), 1000);
  });
}
