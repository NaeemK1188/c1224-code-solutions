'use strict';
/* exported filterOutNulls */
function filterOutNulls(arrAny) {
  const newArr = [];
  for (let i = 0; i < arrAny.length; i++) {
    if (arrAny[i] == null) {
      // if false, it's never executed
      continue;
    } else {
      newArr.push(arrAny[i]);
    }
  }
  return newArr;
}
const input7 = filterOutNulls(['a', null, 'b', null]);
console.log(input7);
