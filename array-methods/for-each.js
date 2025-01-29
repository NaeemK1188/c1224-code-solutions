'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
// like for loop
// values.forEach((element) => console.log(element));
// // or
console.log('in order:');
values.forEach((element) => {
  // we are inside the body of the call back
  // it will repeat 10 times to console.log('in order');
  console.log(element);
});
// values.reverse();
console.log('Reverse order:');
// the forEach() callback runs once for ech element
// it wont go in reverse inside the callback?. only one way. we need to figure out this before .forEach
values.forEach((element, index, array) => {
  // console.log(array[array.length - 1]);
  // array.length--; // its skipping the last 5 index because inside the log we keep resetting the array.length
  // console.log(array.length - 1 - index); // output 9 - 1, index starts at 0
  // (9), (8), (7) reversing the index
  console.log(array[array.length - 1 - index]);
  // [9 - 0 = 8], [9 - 1 = 8], [9 - 2 = 7]
});
