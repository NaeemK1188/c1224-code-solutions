'use strict';
/* exported getValue */
const obj = {
  firstName: 'David',
  lastName: 'Thomas',
};
function getValue(obj, key) {
  return obj[key];
}
const input = getValue(obj, 'firstName');
console.log(input);
