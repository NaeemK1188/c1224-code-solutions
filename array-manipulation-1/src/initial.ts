/* exported initial */

function initial(arrAny: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 0; i < arrAny.length - 1; i++) {
    newArr.push(arrAny[i]);
  }

  return newArr;
}

const input3: unknown = initial(['foo', 'bar', 'baz']);
console.log(input3);
