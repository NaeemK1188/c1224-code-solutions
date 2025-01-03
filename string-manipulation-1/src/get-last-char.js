'use strict';
/* exported getLastChar */
function getLastChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      return str[i];
    }
  }
  return ' '; // it will never reach this return statement
}
const input1 = getLastChar('LearningFuze');
console.log(input1);
