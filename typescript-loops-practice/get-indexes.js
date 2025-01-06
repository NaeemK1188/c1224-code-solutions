'use strict';
/* exported getIndexes */
function getIndexes(arrAny) {
  const arr = [];
  for (let i = 0; i < arrAny.length; i++) {
    arr.push(i);
  }
  return arr;
}
const input2 = getIndexes(['meow', 'woof', 'squeak', 'shazoo']);
console.log(input2);
