# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  share global variable across many components or child components.But
- What values can be stored in context?
  we can put any type of values, but usually object like keys value key as array and value is empty array
  and function key with value to add value to cart
- How do you create context and make it available to the components?
  using createContext with default value

- How do you access the context values?
  wrap the children with component.provider so they can access the context value
  which be usually around the all app, then call useContext and return context object and then we destructuring it
- When would you use context? (in addition to the best answer: "rarely")

  we use it when we want data available globally saving prop drilling. its primary use for global data
  like browserRouter is context or implemented using context

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
