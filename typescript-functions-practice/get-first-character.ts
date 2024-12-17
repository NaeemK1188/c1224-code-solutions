/* exported getFirstCharacter */
function getFirstCharacter(String: string): string {
  const firstChar: string = String[0];
  return firstChar;
}

const firstCharResult: string = getFirstCharacter('arbitrary');
console.log(firstCharResult);
