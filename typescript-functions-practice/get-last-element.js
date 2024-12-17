'use strict';
/* exported getLastElement */
function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}
const resultLastEle = getLastElement(["'foo', 'bar', 'baz'"]);
console.log(resultLastEle);
