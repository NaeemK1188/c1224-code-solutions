'use strict';
/* exported getLastCharacter */
function getLastCharacter(String) {
  const lastChar = String[String.length - 1];
  return lastChar;
}
const lastCharResult = getLastCharacter('arbitrary');
console.log(lastCharResult);
