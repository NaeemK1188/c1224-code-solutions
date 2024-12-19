'use strict';
function getFirstInitialOfPerson(person) {
  const firstNameInitial = person.firstName[0];
  return firstNameInitial;
}
const firstNameInitialRes = getFirstInitialOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(firstNameInitialRes);
