'use strict';
/* exported getKeys */
const obj2 = {
  firstName: 'David',
  lastName: 'Thomas',
};
function getKeys(obj2) {
  const newArr = [];
  for (const key in obj2) {
    newArr.push(key);
  }
  return newArr;
}
const input2 = getKeys(obj2);
console.log(input2);
