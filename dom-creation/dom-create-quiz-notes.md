# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

  No, only create an object element in javascript

- How do you add an element as a child to another element?

  document.parent.appendChild('childNode')

- What do you pass as the arguments to the `element.setAttribute()` method?

  the name of the attribute and the name of the attribute

- What steps do you need to take in order to insert a new element into the page?

  1.create new element
  2. append it to the parent node

- What is the `textContent` property of an element object for?

  Let us assign the a text content to an element object

- Name two ways to set the `class` attribute of a DOM element.

  1.immediate assignment: $button.className = 'submit-button bg-black';
  2. using .setattribute('class', 'className');

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

  1.take in an object of data and use the data in that object to create an HTML structure and return it. Or creates element needed for
  the webpage
  2.uses Data associated with that object like attributes and properties to put it correctly on the html document or the webpage 

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
