# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  for the first time if its not already there. every time its goes in its mounting

- What is a React Effect?
  hook that use to synchronize component together. allows to interact with thing outside react like API to make the timer going
  that is managed runtime outside the code of our application like in network

- When should you use an Effect and when should you not use an Effect?
  do something outside react manage the timer
- When do Effects run?
  effect is a function or when react calls effect function when the component is first mounted and mounted another time and the value
  of dependency array changes then the effect runs. it runs after component once when the code run then when dependency array run

- What function is used to declare an Effect?
  using useEffect hook and we pass it to two arguments callback function and the dependency array

- What are Effect dependencies and how do you declare them?
  things effect function uses to declare outside the function itself that is state and prop which are props
  declare them pass them to useEffect put in array inside the useEffect call which is second argument of useEffect

- Why would you want to clean up from an Effect?
  to clean interval. To stop timer from running. if we have something to allocated memery or netwerk request
  do something in useEffect function and cleaning it up
- How do you clean up from an Effect?
  if we have a effect function when
  and when your function unmount return a function
  when image rotating, to stop the timer to stop the images running
- When does the cleanup function run?
  runs the effect function function and then run the clean up function after when component unmount

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
