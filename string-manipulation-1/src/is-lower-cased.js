'use strict';
/* exported isLowerCased */
function isLowerCased(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      continue;
    } else if (str[i] === str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
let input4 = isLowerCased('LearningFuze');
console.log(input4);
input4 = isLowerCased('zip-ties');
console.log(input4);
input4 = isLowerCased('JavaScript');
console.log(input4);
input4 = isLowerCased('burgers');
console.log(input4);
input4 = isLowerCased('HTML');
console.log(input4);
