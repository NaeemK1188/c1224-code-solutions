'use strict';
/* exported initial */
function initial(arrAny) {
  const newArr = [];
  for (let i = 0; i < arrAny.length - 1; i++) {
    newArr.push(arrAny[i]);
  }
  return newArr;
}
const input3 = initial(['foo', 'bar', 'baz']);
console.log(input3);
