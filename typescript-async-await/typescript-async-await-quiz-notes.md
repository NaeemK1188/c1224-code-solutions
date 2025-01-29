# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  allows to reads in synchronous, but in theory is asynchronous

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  both use promises, we await the promise. instead of Promise.catch we use try/catch

- When do you use `async`?
  wen we want to make the function asynchronous or when we use await

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  use await: whenever we want to await for a synchronous function or wait for promise
  await has no effect if its not a async

- How do you handle errors with `await`?
  with try/catch mechanism with await because await calls catch handlers

- What do `try`, `catch` and `throw` do? When do you use them?
  try is going to try to execute the code in try as long its succeed, if an exception is thrown, we will skip to catch
  throw exception and stop our code in try() trying to execute the code
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  code will keep executing if we are at pending it will skip and go to the second step
  promise rejection, our code wont catch the error because await calls the catch block, so we wont handle the error

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/ await because its easy to read

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
