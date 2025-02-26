# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

  Show user information to make user interact to take your attention, then do some actions

- How do you show and hide a modal dialog?
  show, .showModel();
  .close() to close the, but we need to call dom element methods

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  By passing them as a props.
  in dialog we cannot do that, because its a DOM element and dialog cannot manipulated with props, so we cannot call
  child method. Children can interact with parent using functions

- How do you call the dialog element's functions in React?

  we reference the dialog element using useRef hook, gets reference of the dialog element to call its method
  or to actual DOM element.
  queryelement , which useRef use the same thing as document.queryElement. useRef let us access the DOM element
  React creates a ref to element to interact with dialog to use open, close

- How can you render nested components or JSX elements in React?
  creates structure like html
  <parent>
  <children>

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
