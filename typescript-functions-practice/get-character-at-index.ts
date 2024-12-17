/* exported getCharacterAtIndex */
function getCharacterAtIndex(String: string, index: number): string {
  if (index >= 0 && index < String.length) {
    const charAtIndex: string = String[index];
    return charAtIndex;
  } else {
    return 'out of scope';
  }
}

const charAtIndexRes: string = getCharacterAtIndex('turkey sandwich', 6);
console.log(charAtIndexRes);
