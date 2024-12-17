'use strict';
/* exported getSecondCharacter */
function getSecondCharacter(String) {
  const secChar = String[1];
  return secChar;
}
const secCharResult = getSecondCharacter('arbitrary');
console.log(secCharResult);
