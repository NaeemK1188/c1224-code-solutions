# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?

  it triggers a focus event.

- What event is fired when a user's cursor leaves a form control?

  it triggers a blur event.

- What event is fired as a user changes the value of a form control?

  Input event when value changes

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

  submit event.

- What does the `event.preventDefault()` method do?

  prevents the default submission when the user clicks the submit button or enter button within the form. the submission
  form info will viewed on javascript side
  prevent the default action of each event because each event has its own default behavior

- What does submitting a form without `event.preventDefault()` do?

  the entire from will be submitted by default to the URL action tab

- What property of a form element object contains all of the form's controls.

  .element property collection of all form control

- What property of a form control object gets and sets its value?

  the value

- What is one risk of writing a lot of code without checking to see if it works so far?

  we won't be able to see if our code is running correctly. then debugging instead
  we won't see what is wrong

- What is an advantage of having your console open when writing a JavaScript program?

  to check if we have any error or to check the output of our code
  live evaluation like seeing errors or event happening

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
