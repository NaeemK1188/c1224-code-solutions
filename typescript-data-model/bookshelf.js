'use strict';
// array of objects Book or variable bookshelf of BOOK array type or array of Book objects
const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
const secondBookAuthor = bookshelf[1].author;
console.log("name of the second's book author:", secondBookAuthor);
const firstBookISBN = bookshelf[0].isbn; // or [0]['isbn'] => [row:0][col:2]
console.log('ISBN of the first book', firstBookISBN);
const titleThirdBook = bookshelf[2].title;
console.log('title of the third book:', titleThirdBook);
