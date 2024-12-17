/* exported getLastElement */
function getLastElement(array: string[]): string {
  const lastElement: string = array[array.length - 1];
  return lastElement;
}

const resultLastEle: string = getLastElement(["'foo', 'bar', 'baz'"]);
console.log(resultLastEle);
