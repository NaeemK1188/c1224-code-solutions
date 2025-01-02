'use strict';
/* exported reverse */
function reverse(arrAny) {
  const newArr = [];
  for (let i = arrAny.length - 1; i >= 0; i--) {
    newArr.push(arrAny[i]);
  }
  return newArr;
}
const input4 = reverse(['foo', 'bar', 'baz']);
console.log(input4);
