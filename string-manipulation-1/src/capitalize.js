'use strict';
/* exported capitalize */
function capitalize(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i].toLowerCase();
    }
  }
  return newStr;
}
let input2 = capitalize('a');
console.log(input2);
input2 = capitalize('link');
console.log(input2);
input2 = capitalize('tO');
console.log(input2);
input2 = capitalize('ThE');
console.log(input2);
