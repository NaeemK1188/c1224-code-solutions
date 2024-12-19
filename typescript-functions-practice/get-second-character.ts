/* exported getSecondCharacter */
function getSecondCharacter(String: string): string {
  const secChar: string = String[1];
  return secChar;
}

const secCharResult: string = getSecondCharacter('arbitrary');
console.log(secCharResult);
