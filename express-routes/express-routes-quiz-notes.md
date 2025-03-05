# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

  http methods: create -> POST, read -> GET, update -> PUT, delete -> DELETE
  conventional means is not required, but this is how to behave according to RESTful API behavior is following CRUD behavior
  link is GET http request
  we will follow the RESTful API guideline using CRUD

- What is Express middleware?
  a list or array of functions. whenever request comms in the express takes the response/request object and pass it to each of the function
  then one of these functions takes the request and decides to sends the response back.

- What is Express middleware useful for?
  Allows you to determine how request should be handled
  when requests comes from the top and wait until some of middleware function takes it and returns it

- How do you mount a middleware with an Express application?
  By using app.use and pass it middleware function next()
  mount is getting pushed to the end of the array of middleware
  .listen() is not middleware

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req, res, next function(im done) where next means im done move it to next middleware

- How do you specify and retrieve route parameters?
  specifying them by putting colon in the path

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
