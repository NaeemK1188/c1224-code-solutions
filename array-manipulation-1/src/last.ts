/* exported last */

function last(arrAny: unknown[]): unknown {
  for (let i = 0; i < arrAny.length; i++) {
    if (i === arrAny.length - 1) {
      return arrAny[i];
    } else if (arrAny == null) {
      return undefined;
    }
  }
}

const input1: unknown = last(['foo', 'bar', 'baz']);
console.log(input1);
