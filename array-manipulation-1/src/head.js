'use strict';
/* exported head */
function head(arrAny) {
  for (let i = 0; i < arrAny.length; i++) {
    if (i === 0) {
      return arrAny[i];
    } else if (arrAny == null) {
      return undefined;
    }
  }
}
const input = head(['foo', 'bar', 'baz']);
console.log(input);
