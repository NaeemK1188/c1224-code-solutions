'use strict';
/* exported getLastNameOfPerson */
function getLastNameOfPerson(person) {
  return person.lastName;
}
const lastNameRes = getLastNameOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(lastNameRes);
