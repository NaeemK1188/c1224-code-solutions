'use strict';
/* exported getElementAtIndex */
function getElementAtIndex(array, index) {
  const getAtIndex = array[index];
  return getAtIndex;
}
const getAtIndexResult = getElementAtIndex([9, 10, 19, 20], 2);
console.log(getAtIndexResult);
