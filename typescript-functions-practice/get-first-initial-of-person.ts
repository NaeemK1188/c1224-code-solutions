/* exported getFirstInitialOfPerson */
interface Human {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: Human): string {
  const firstNameInitial: string = person.firstName[0];
  return firstNameInitial;
}

const firstNameInitialRes: string = getFirstInitialOfPerson({
  firstName: 'Ada',
  lastName: 'Lovelace',
});

console.log(firstNameInitialRes);
