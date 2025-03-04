# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  let you make send sql to database from javascript

- How do you tell `pg` which database to connect to?
  creating new pool y=using property connection string
  setting up connection to database. establishing connection using pool
  or collection of connection.

- How do you send SQL to PostgreSQL from your Express server?
  db.query(sql)

- How do you access the rows that get returned from the SQL query?
  result.rows

- What must you always remember to put around your asynchronous route handlers? Why?
  try/catch. To avoid any errors, so the respond stays hang

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  taking advantage of string interpolation. we use pg parametrization by adding $1 for the first value

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
