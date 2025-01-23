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
values.reverse();
console.log('Reverse order:');
// the forEach() callback runs once for ech element
// it wont go in reverse inside the callback?. only one way. we need to figure out this before .forEach
values.forEach((element) => {
  console.log(element);
});
