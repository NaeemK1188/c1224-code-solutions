'use strict';
/* exported getFullNameOfPerson */
// inherits the interface from the getLastNameOFperson() file
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
const fullNameRes = getFullNameOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(fullNameRes);
