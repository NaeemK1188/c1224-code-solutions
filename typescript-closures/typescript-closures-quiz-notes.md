# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when the scope is determined?

  when a variable or function is referenced or where to access it
  where a variable or function can access it.
  when function is created or determined everything is declared in that scope can be accessed

- What allows JavaScript functions to "remember" variables from their surroundings?
  remember variables using closure allows function to incloses the variables inside the scope so
  it can be accessed

- What values does a closure contain?
  all variables declared outside the function but not in the immediate scope

- When is a closure created?
  when function is declared
  when function definition and adds closure to it

- How can you tell if a function will be created with a closure?
  function only create closure
  if it has dependencies or variables exist outside its immediate scope
  like functions can access any variables outside them but variables cannot
  so, closures is a backpack outside its immediate scope
- In React, what is one important case where you need to know if a closure was created?
  when we create dependency array

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
