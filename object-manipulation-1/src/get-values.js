'use strict';
/* exported getValues */
const obj3 = {
  firstName: 'David',
  lastName: 'Thomas',
};
function getValues(obj3) {
  const newArr = [];
  for (const key in obj3) {
    newArr.push(obj3[key]);
  }
  return newArr;
}
const input3 = getValues(obj3);
console.log(input3);
