'use strict';
/* exported findIndex */
function findIndex(arrNum, numVal) {
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === numVal) {
      return i;
    }
  }
  return -1; // else return -1, the compiler knows that this is else option, so no need to write else
}
const input11 = findIndex([1, 5, 3], 5);
console.log(input11);
