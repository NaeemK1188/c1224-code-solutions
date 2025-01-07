# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  to see there values in html. understand and see what is happening in our code. to see the flow of data
  why the code is not working

- What is the purpose of events and event handling?

  1.Events: are the interactions of users with the webpage.
  2.even-handling: handling the interaction of the user with html using programming language and output the result to the console
  makes our page more dynamic, or its just to handle the event in our webpage

- Are all possible parameters required to use a JavaScript method or function?

  1.For regular method we can use function without parameters
  2.For event listeners, its required to add callback function and events(the name of the event(event type) or the event to listen for)

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  (Element Object is an object that is exists in html file, not a regular object. Function to be called, is the callback function, or Arrow
  anonymous function)

  .addEventListener

- What is a callback function?

  its a function that is called on another function as an argument

- What object is passed into an event listener callback when the event fires?

  event object. (event listener listen to an object event)

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  event.target is the value of the event object. (Event is the element that triggered by the user interaction)

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  Function definition that is waiting the passing a reference of function(handleClick)
  ```js
  element.addEventListener('click', handleClick());
  ```
  Calling the function and taking the return value on the spot. Its not returning anything just undefined because it returns nothing(void)

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
