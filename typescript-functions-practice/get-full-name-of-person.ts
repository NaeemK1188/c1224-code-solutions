/* exported getFullNameOfPerson */

// inherits the interface from the getLastNameOFperson() file

function getFullNameOfPerson(person: Person): string {
  return person.firstName + ' ' + person.lastName;
}

const fullNameRes: string = getFullNameOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(fullNameRes);
