"use strict";
/* exported compact */
function compact(arrAny) {
    const newArr = [];
    for (let i = 0; i < arrAny.length; i++) {
        if (arrAny[i] === false) {
            continue;
        }
        else if (arrAny[i] === null) {
            continue;
        }
        else if (Number.isNaN(arrAny[i])) // if the number is NaN, the compiler will execute if() and execute continue to the next iteration
         {
            continue;
        }
        else if (arrAny[i] === 0 || arrAny[i] === -0) {
            continue;
        }
        else if (arrAny[i] === undefined) {
            continue;
        }
        else if (arrAny[i] === "") {
            continue;
        }
        else {
            newArr.push(arrAny[i]);
        }
    }
    return newArr;
}
let input5 = compact([true, true, false, true]);
console.log(input5);
input5 = compact([{}, null, {}, {}]);
console.log(input5);
input5 = compact([1, 2, 3, 4, NaN, 6, 7]);
console.log(input5);
input5 = compact([-0, 8, 9, 10, 11, 0, 13]);
console.log(input5);
input5 = compact([[], undefined, [], [], undefined]);
console.log(input5);
input5 = compact(['', 'foo', 'bar', '', 'baz', 'qux']);
console.log(input5);
