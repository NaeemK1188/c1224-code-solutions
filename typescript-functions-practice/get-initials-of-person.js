'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const getInitials = person.firstName[0] + person.lastName[0];
  return getInitials;
}
const getInitialsResult = getInitialsOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(getInitialsResult);
