# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

  its the property of the Dom element that allows us to manipulate the CSS classes applied to an element

- How do you update the CSS class attribute of an element using JavaScript?

  using setter functionality: DomElement.className = newClass1

- What is the `textContent` property of element objects?

  it's the DOM element property represents the text content of an element. It allows us to manipulate the text content

- How do you update the text within an element using JavaScript?

  using setter functionality DomElement.textContent = "new text"

- Is the `event` parameter of an event listener callback always useful?

  The Event is a global object. The event parameter can be omitted, but its important to be used locally

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

  Missing counter number will make it complicated because we cannot change the color of the button clicked

- Why is storing information about a program in variables better than only storing it in the DOM?

  In order to manipulate the DOM element or control its behavior or makes it dynamically changes

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
