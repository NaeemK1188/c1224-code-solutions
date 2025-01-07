'use strict';
/* exported toObject */
function toObject(objArr) {
  const obj4 = {};
  obj4[objArr[0]] = objArr[1];
  return obj4;
}
const input4 = toObject(['firstName', 'David']);
console.log(input4);
