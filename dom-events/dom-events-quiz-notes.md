# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  to see there values in html. understand and see what is happening in our code. to see the flow of data
  why the code is not working

- What is the purpose of events and event handling?

  1.Events: are the interactions of users with the webpage.
  2.even-handling: handling the interaction of the user with html using programming language and output the result to thr console
  makes our page more dynamic
  handle the event in our webpage

- Are all possible parameters required to use a JavaScript method or function?

  For regular method we can use function without parameters
  for listeners its required to add callback function and events(the name of the event and the event to listen for)

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  .addEventListener

- What is a callback function?

  its a function that is called on another function as an argument

- What object is passed into an event listener callback when the event fires?

  event object, we can listen to an object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  event.target its the value of the event object. is the element that triggered the event.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  function definition, waiting the
  passing a reference of function
  ```js
  element.addEventListener('click', handleClick());
  ```
  calling the function and taking the return value.
  its not returning anything just undefined because its a void

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
