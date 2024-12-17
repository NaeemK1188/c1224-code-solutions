/* exported getLengthOfString */
function getLengthOfString(String: string): number {
  const lenOfStr: number = String.length;
  return lenOfStr;
}

const lenOfStrResult: number = getLengthOfString('arbitrary');
console.log(lenOfStrResult);
