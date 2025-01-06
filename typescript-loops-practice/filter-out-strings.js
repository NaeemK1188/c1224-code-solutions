'use strict';
/* exported filterOutStrings */
function filterOutStrings(arrAny) {
  const newArr = [];
  for (let i = 0; i < arrAny.length; i++) {
    if (typeof arrAny[i] === 'string') {
      continue;
    } else {
      newArr.push(arrAny[i]);
    }
  }
  return newArr;
}
const input8 = filterOutStrings([1, 2, 3, 'x', 'y', 10]);
console.log(input8);
