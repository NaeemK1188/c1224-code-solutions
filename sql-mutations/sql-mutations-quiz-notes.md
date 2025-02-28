# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create, read, update, delete

- How do you add a row to a SQL table?
  Using insert statement

- How do you add multiple rows to a SQL table at once?
  Using commas with parenthesis

- How do you update rows in a database table?
  Using update statement

- How do you delete rows from a database table?
  Using delete statement

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  For filtering because without it, update will update everything, and delete
  will delete everything

- How do you accidentally delete or update all rows in a table?
  Without using where clause

- How do you get back the modified row without a separate `select` statement?
  Using returning \* clause
  we don't specify primary key when we delete, so we add returning \*

- Why did you get an error when trying to delete certain films?
  because the foreign key error that shows the filmId is still referenced from
  table customers

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
