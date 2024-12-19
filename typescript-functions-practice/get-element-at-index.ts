/* exported getElementAtIndex */
function getElementAtIndex(array: number[], index: number): number {
  const getAtIndex: number = array[index];
  return getAtIndex;
}

const getAtIndexResult: number = getElementAtIndex([9, 10, 19, 20], 2);
console.log(getAtIndexResult);
