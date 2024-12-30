'use strict';
/* exported countdown */
function countdown(num) {
  const numArr = [];
  for (let i = num; i >= 0; i--) {
    numArr.push(i);
  }
  return numArr;
}
const input = countdown(2);
console.log(input);
