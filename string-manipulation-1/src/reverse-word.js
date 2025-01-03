'use strict';
/* exported reverseWord */
function reverseWord(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
let input7 = reverseWord('foo');
console.log(input7);
input7 = reverseWord('rab');
console.log(input7);
input7 = reverseWord('LearningFuze');
console.log(input7);
input7 = reverseWord('tpircSavaJ');
console.log(input7);
input7 = reverseWord('racecar');
console.log(input7);
