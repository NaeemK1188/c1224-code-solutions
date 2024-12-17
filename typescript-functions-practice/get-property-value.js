'use strict';
/* exported getPropertyValue */
function getPropertyValue(person, key) {
  const propertyValue = person[key];
  return propertyValue;
}
const propertyValueRes = getPropertyValue(
  { name: 'Ada', occupation: 'countess', birthPlace: 'London, England' },
  'name'
);
console.log(propertyValueRes);
