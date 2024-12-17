/* exported getInitialsOfPerson */

interface Persons {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Persons): string {
  const getInitials: string = person.firstName[0] + person.lastName[0];
  return getInitials;
}

const getInitialsResult: string = getInitialsOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(getInitialsResult);
