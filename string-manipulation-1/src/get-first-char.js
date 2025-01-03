'use strict';
/* exported getFirstChar */
function getFirstChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      return str[i];
    }
  }
  return '';
}
const input = getFirstChar('LearningFuze');
console.log(input);
