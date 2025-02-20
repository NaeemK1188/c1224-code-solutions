# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  it doesn't
  expect the name of the page displays URL changes with it, which view swapping doesnt do that, not match what user's expect

- What NPM package can be used to make navigating a React app behave as users expect?

  React-router

- Which React Router component(s) can be used to set up your app's navigation?

  one for pages and one for components. Route and routes are two components installed in npm package

- How does React Router match the browser URL to one of your app's React components?

  put route component and tell it the path equal the browser URL and element tells the react which page to display

- What is the purpose of React Router's `Outlet` component?

  placeholder that put nested of routes where the page contents to show up
  when react matches URL page it put it layout

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  useParam hook

- What React Router hook is used to navigate programmatically?

  useNavigate hook decision dynamically

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
