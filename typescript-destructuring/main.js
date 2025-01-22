'use strict';
const book1 = {
  title: 'Goodnight punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
// assigning the book properties into new variables
const { title, author, libraryId } = book1;
console.log(
  'The title of the book is',
  title,
  ', the author is',
  author,
  ', and the library id is',
  libraryId
);
const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
const { title: title1, author: author1, libraryId: libraryId1 } = book2;
console.log(
  'the title of the book is',
  title1,
  ', the author is',
  author1,
  ', and the library id is',
  libraryId1
);
const library = [
  {
    title: 'the Road Ahead',
    author: 'Bill Gates',
    libraryId: 1245,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const [library3, library4, library5] = library;
console.log('book3:', library3);
console.log('book4:', library4);
console.log('book5:', library5);
const [, , , library6] = library;
console.log('book6', library6);
