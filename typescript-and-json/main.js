'use strict';
// interface Student
// {
//   // using  (-) in naming causes error
//   studentId:number;
//   studentName:string;
// };
const books = [
  {
    isbn: '11223344',
    title: 'python crash course',
    author: 'mike oscar',
  },
  {
    isbn: '55667788',
    title: 'C language',
    author: 'Dinnes Rishi',
  },
  {
    isbn: '99001122',
    title: 'software engineering',
    author: 'michael angelo',
  },
];
// JSON.stringify; is just converting the array of objects to string not array of string
const bookJSON = JSON.stringify(books);
console.log('books:Book[]:', books);
console.log('typeof books:', typeof books);
// console.log(books[0]);
// console.log(books[0].author);
console.log(bookJSON);
// it create an array of json objects, but still strings
const studentJSON = '{"studentId":12232, "studentName":"Michael Angelo"}';
// formatting data as a JSON
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
// using JSON.parse, we don't have to create an interface for the object ?
// const student:Student = JSON.parse(studentJSON);
const student = JSON.parse(studentJSON);
console.log('student object:', student);
console.log('typeof student', typeof student);
