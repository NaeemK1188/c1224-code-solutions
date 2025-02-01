# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  logical operators that evaluates two conditions. It also, execute console.log() if expr1 is true
  logical operators that evaluates two conditions. It also, execute console.log() if expr1 is false
  checks for truthy and falsy and execute based on its values.
  &&

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  console.log (expr1 && expr2)
  console.log (expr1 || expr2)

  or

  expr1 && console.log(exp2)
  expr1 || console.log(exp2)

  moving from left to right until result is determined

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  it evaluates the second expression if the first one is null
  differ from || because the OR evaluates second expr if its false
  exact the same as OR just inspect if the first is null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  its concise way if creating if/else
  (condition) expr1(if) : expr2(else)
  right side after : is what is going to be returned where you can returned immediately the value
  to a variable. if/else not returning a value. it has to be inside the if/else block

- What is the `?.` (optional chaining) operator? When would you use it?
  its for conditional obj properties. it let us output the value of the property by letting us
  know if it exists or not. Or let us know the value

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  newObj = {...oldObj, newProp:value}
  it extends the structure of the old object
  But, we are not changing the old object. Its only as snapshot not like extends

- What data types can be spread into an array? Into an object?
  any type

- How does spread syntax differ from rest syntax?

  its shortcut of doing extends in interface
  any iterable into an array. not iterable
  into in object is everything
  but array will cause a weird behavior
  rest: condensing

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
