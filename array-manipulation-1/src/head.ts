/* exported head */
function head(arrAny: unknown[]): unknown {
  for (let i = 0; i < arrAny.length; i++) {
    if (i === 0) {
      return arrAny[i];
    } else if (arrAny == null) {
      return undefined;
    }
  }
}

const input: unknown = head(['foo', 'bar', 'baz']);
console.log(input);
