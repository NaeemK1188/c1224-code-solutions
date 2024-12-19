/* exported getLengthOfArray */
function getLengthOfArray(array: number[]): number {
  const lengthOfArray: number = array.length;
  return lengthOfArray;
}

const lengthResult: number = getLengthOfArray([9, 10, 19, 20]);
console.log(lengthResult);
