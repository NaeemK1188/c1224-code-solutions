# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

  provide functionalities to react and one of the them is saving the changing state
  Provide capabilities functionalities to react

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  1.naming has to include use 2. used at the top level of a component 3. 3. called by component

- What is the purpose of state in React?

  Save the updated state after each iteration

- Why can't we just maintain state in a local variable?

  because it gets destroyed when we move out of the scope of its locality
  state modify effect the look or the behavoir of component

- What two actions happen when you call a `state setter` function?

  sets the new value of the count and get called back by useState
  useState is an array that return two

  1.update the cache
  2.trigger the re-render(re-draw)
  awaite event queue like promises. use state, schedule the re-render in event queue.

- When does the local `state variable` get updated with the new value?
  declared in useState call. When we call stateSetter
  rerender is not when we refresh the page, next time when we call the useState

  when using setter function

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
