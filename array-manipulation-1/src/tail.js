"use strict";
/* exported tail */
function tail(arrAny) {
    const newArr = [];
    for (let i = 1; i < arrAny.length; i++) {
        newArr.push(arrAny[i]);
    }
    return newArr;
}
const input2 = tail(['foo', 'bar', 'baz']);
console.log(input2);
