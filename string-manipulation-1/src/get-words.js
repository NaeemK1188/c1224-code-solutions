'use strict';
/* exported getWords */
function getWords(str) {
  let newArr = [];
  if (str === '') {
    newArr.pop();
    return newArr;
  } else {
    newArr = str.split(' ');
    return newArr;
  }
}
const input6 = getWords('LearningFuze');
console.log(input6);
