/* exported getFirstElement */
function getFirstElement(array: number[]): number {
  const firstElement: number = array[0];
  return firstElement;
}

const firstElementResult: number = getFirstElement([9, 10, 19, 20]);
console.log(firstElementResult);
