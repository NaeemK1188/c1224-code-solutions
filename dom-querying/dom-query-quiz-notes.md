# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  its like accessing the things using programming language such as javascript
  for debug or see the value or what is storing. to see what is going wrong to see the data

- What is a "model"?

  its the model of html element in the webpage
  structure of our webpage.
  recreation of something exists

- Which "document" is being referred to in the phrase Document Object Model?

  its the root document which is the html file

- What is the word "object" referring to in the phrase Document Object Model?

  each element in the webpage is an object
  how each element is recreated as an element or as a model or recreation of html element
  document is a whole model we can create

- What is a DOM Tree?

  its the treelike structure of the html document

- Give two examples of `document` methods that retrieve a single element from the DOM.

  1.querySelector('element')
  2.getElementByClassName('my-class')

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

  querySSelectorAll('a')

- Why might you want to assign the return value of a DOM query to a variable?

  to save or hold the return value in order to manipulate using programming language like JS
  Because of this, it is generally a best practice to store DOM element references in a variable.
  Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?

  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?

  first element that is selected in .css file

- What does `document.querySelectorAll()` take as its argument and what does it return?

  All elements in the document that match the css selector

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
