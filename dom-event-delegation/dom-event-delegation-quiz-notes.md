# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  it shows at which object element the trigger was occurred. target is property that exist on event object. who actually mouse over
  or who caused the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?

  because of the bubble effect. since buble upward to dom tree so we can use the parent

- What DOM element property tells you what type of element it is?

  event.target.tagName or tagName

- What does the `element.closest()` method take as its argument and what does it return?

  takes ancestor element or the parent element of the child node or tag. closest(closest .css selector under class name)

- How can you remove an element from the DOM?

  using remove() property of dom element

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

  using the parent node because of the advantage of bubble effect. using current target

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
