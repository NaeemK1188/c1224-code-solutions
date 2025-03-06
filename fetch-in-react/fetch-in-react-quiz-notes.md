# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  fetch()

- What two things need to be done to properly handle HTTP request errors? Why?
  try/catch and response.ok

- How can `useEffect` be used to load data for a component?
  if your component want to fetch something outside your app or outside React

- How do you use `useEffect` to load component data just once when the component mounts? mount component
  first time drawn on the DOM for the first time and
  run just once when the dependencies array is empty, nothing is changed

- How do you use `useEffect` to load component data every time the data key changes?
  passing prop to dependencies that is constantly changing
  fetch is used in useEffect for now even in out project
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  react query or swr

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
