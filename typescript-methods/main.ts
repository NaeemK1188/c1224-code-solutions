// ------------------MATH METHODS-------------------------------------------------
const heroes: string[] = ['Superman', 'Batman', 'Captain America', 'Mad Max'];
// console.log(heroes.length); // length is 4 number of elements in the array

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);
// it outputs random number between 0-5, but not including the last one like only taking indexes
const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

// --------------------------------------------------------------------------------------
// --------------------------ARRAY METHODS------------------------------------------------

interface Js {
  title: string;
  author: string;
}

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

// array of objects;
const library: Js[] = [
  {
    // [0]
    title: 'Calculus 1',
    author: 'Dines, Richie',
  },

  {
    // [1]
    title: 'JavaScript for Beginners',
    author: 'William, McCarthy',
  },
  // [2]
  {
    title: 'Python Crash Course',
    author: 'Richie',
  },
];

const lastBook = library.pop(); // it delete the element permanently last element
console.log('lastBook:', lastBook); // returning last element deleted which is name
const firstBook = library.shift();
console.log('firstBook:', firstBook); // Removes the first element from an array and returns that element.

library.push(js); // returns the new length of the array which is now 2

// now, we have 2 element: JS for beginners and calc 1 books

library.unshift(css); // adds to the front of the array css obj and return a length of 3
// now we have a length of 3 after adding css
// the books now: css secrets, js for beginners, JS for impatient
library.splice(1, 1); // we are not adding any elements to the array of objects
console.log('library:', library);
// ----------------------------------------------------------------------------------------------
// -----------------------------STRING METHODS---------------------------------------------------

const fullName: string = 'Noah Khayat';

// ('') will split to characters in an array, (' ') splits names into two elements of the array
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

// -----------------------------------------------------------------------------------------------
// ---------------------------OBJECT METHODS-----------------------------------------------------

interface Employee {
  name: string;
  age: number;
  position: string;
}

const employee: Employee = {
  name: 'Moe Khayat',
  age: 32,
  position: 'VP',
};

const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
// output [['name', 'Moe Khayat'], ['age', 32], ['position', 'VP']]
