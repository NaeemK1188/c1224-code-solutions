'use strict';
/* exported setValue */
const obj1 = {
  firstName: 'Dave',
};
function setValue(obj1, key, value) {
  obj1[key] = value;
}
setValue(obj1, 'lastName', 'Thomas');
console.log(obj1);
