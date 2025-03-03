# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client? is react.js

  its a device or software requesting a service or resource from a server
  im the customer in restaurant. client is the web browser which makes request on
  behalf of the user

- What is a server? Node.js, express.js
  kitchen that prepare the food
  its a computer or software that provide services to clients and api server that provide
  not accessible to user, in building no user interface

- Which HTTP method does a browser issue to a web server when you visit a URL?
  that take your order
  http GET to get resource from the web-server like take request(order) from customer to kitchen server that
  look into the recipe book (database) and returns http request(http waiter order) that return the response or the order
  to the customer

- What three things are on the start-line of an HTTP **request** message?

  <method> <request target> (URL) <protocol>

  1. method like POST
  2. request target or what are targeting in the request like user
  3. communication protocol is http/1.1

- What three things are on the start-line of an HTTP **response** message?

  <protocol> <status code>(201) <status text>(created)

  1. communication protocol
  2. status code indicating the success or if the request is failed
  3. textual or human readable meaning of the status code like 201 is created

- What are HTTP headers?

  its the first part of the request of response message in communication between
  client and server or the heading
  the meta-data or description about the message send or response
  meta data is data about the request
  request is the food you are trying to get IS THE FOOD
  the body is the actual food

- Where would you go if you wanted to learn more about a specific HTTP Header?

  learn about MDN documentation
  Headers is information about who took the order what table
  headers are key/ value pair with info about the request and about the body
  and the request from the Host
  response :
  location is the URL where request came from
  user agent: what type of browser was initiating the request. Mozilla is firefox
  referrer is the entire URL. Host is the website name before the first forward slash
  headers name start with X-

- Is a body required for a valid HTTP request or response message?
  yes not required only receive status response

  cloud services: AWS Amazon, Google GCP, Microsoft AZURE in data center next to rivers to cool down
  with 100k PCs

  /endpoint or /path

  Header has blank line under it then its the body, but both have key/value pairs

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
