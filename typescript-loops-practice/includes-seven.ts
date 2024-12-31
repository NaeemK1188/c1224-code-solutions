/* exported includesSeven */

function includesSeven(arrAny: any[]): boolean {
  for (let i = 0; i < arrAny.length; i++) {
    if (arrAny[i] === 7) {
      return true;
    }
  }

  return false; // return false because it didn't find any value of 7 like else
}

const input9: boolean = includesSeven([1, 2, 3, 4, 5, 6, 7]);
console.log(input9);
