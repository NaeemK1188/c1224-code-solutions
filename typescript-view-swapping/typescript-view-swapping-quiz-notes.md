# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  is the object element responsible for the triggered event. who actually responsible for firing the event

- What is the effect of setting an element to `display: none`?

  removing any existing effects from object's property. makes it removing it from the actual document like absolute not like visibility
  or use visibility hidden(the content is larger still taking a space )

- What does the `element.matches()` method take as an argument and what does it return?

  the name of the attribute we want to check of its existence in html. or take a css selector but has to be a css

- How can you retrieve the value of an element's attribute?

  using the $div.getAttribute('class')

- At what steps of the solution would it be helpful to log things to the console?

  In every steps, like when query selecting and adding event listener.
  to check if the current tab is on view or focus

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

  i need to use eventlistener for many times. Using delegation by using parent container so we write one event listener

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

  we need to have many if conditional statements

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
