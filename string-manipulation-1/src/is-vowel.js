'use strict';
/* exported isVowel */
function isVowel(str) {
  if (str === 'a' || str === 'A') {
    return true;
  } else if (str === 'e' || str === 'E') {
    return true;
  } else if (str === 'o' || str === 'O') {
    return true;
  } else if (str === 'u' || str === 'U') {
    return true;
  } else if (str === 'i' || str === 'I') {
    return true;
  } else {
    return false;
  }
}
let input5 = isVowel('L');
console.log(input5);
input5 = isVowel('f');
console.log(input5);
input5 = isVowel('Z');
console.log(input5);
input5 = isVowel('a');
console.log(input5);
input5 = isVowel('E');
console.log(input5);
input5 = isVowel('I');
console.log(input5);
input5 = isVowel('o');
console.log(input5);
input5 = isVowel('u');
console.log(input5);
