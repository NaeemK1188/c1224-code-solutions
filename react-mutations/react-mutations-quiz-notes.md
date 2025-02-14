# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?

  .state setter triggers the re-render only when we have a new value
  .update the cache(state) and call the rerender
  . only if the passed value is changed where it compares to the value in cache
  . The cache updated and the rerendeing only happens if the state value is changed

- What are some ways to create a new, modified copy of an object?

  Object.assign or using spread syntax that is easier
  create brand new object and populate it by spreading old items pluse the new one

- What is a good way to immutably add a value to an array?

  array.concat() => creating the same old array and add new element to it
  or is using spread as a modern way

- What is a good way to immutably update a value in an array?
  map creates new array and create the existing one one updated

- What is a good way to immutably remove a value from an array?
  filter, removing the element
  if it not equal return, if it equal not return

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
