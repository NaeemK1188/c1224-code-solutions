/* exported getSecondElement */
function getSecondElement(array: number[]): number {
  const secondElement: number = array[1];
  return secondElement;
}

const secondElementResult: number = getSecondElement([9, 10, 19, 20]);
console.log(secondElementResult);
