/* exported getLastNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

function getLastNameOfPerson(person: Person): string {
  return person.lastName;
}

const lastNameRes: string = getLastNameOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});
console.log(lastNameRes);
