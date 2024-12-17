'use strict';
/* exported getFirstCharacter */
function getFirstCharacter(String) {
  const firstChar = String[0];
  return firstChar;
}
const firstCharResult = getFirstCharacter('arbitrary');
console.log(firstCharResult);
