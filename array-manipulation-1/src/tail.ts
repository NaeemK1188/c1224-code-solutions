/* exported tail */

function tail(arrAny: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 1; i < arrAny.length; i++) {
    newArr.push(arrAny[i]);
  }

  return newArr;
}

const input2: unknown = tail(['foo', 'bar', 'baz']);
console.log(input2);
