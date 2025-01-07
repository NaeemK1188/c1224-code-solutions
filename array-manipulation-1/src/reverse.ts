/* exported reverse */

function reverse(arrAny: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = arrAny.length - 1; i >= 0; i--) {
    newArr.push(arrAny[i]);
  }

  return newArr;
}

const input4: unknown = reverse(['foo', 'bar', 'baz']);
console.log(input4);
