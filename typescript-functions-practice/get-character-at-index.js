'use strict';
/* exported getCharacterAtIndex */
function getCharacterAtIndex(String, index) {
  if (index >= 0 && index < String.length) {
    const charAtIndex = String[index];
    return charAtIndex;
  } else {
    return 'out of scope';
  }
}
const charAtIndexRes = getCharacterAtIndex('turkey sandwich', 6);
console.log(charAtIndexRes);
