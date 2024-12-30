/* exported getIndexes */
function getIndexes(arrAny: any[]): number[] {
  const arr: any[] = [];
  for (let i = 0; i < arrAny.length; i++) {
    arr.push(i);
  }

  return arr;
}

const input2: any[] = getIndexes(['meow', 'woof', 'squeak', 'shazoo']);
console.log(input2);
