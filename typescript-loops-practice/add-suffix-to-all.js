'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const fullWords = [];
  for (let i = 0; i < words.length; i++) {
    fullWords.push(words[i] + suffix);
  }
  return fullWords;
}
const input3 = addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');
console.log(input3);
