/* exported getLastCharacter */
function getLastCharacter(String: string): string {
  const lastChar: string = String[String.length - 1];
  return lastChar;
}

const lastCharResult: string = getLastCharacter('arbitrary');
console.log(lastCharResult);
