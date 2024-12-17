/* exported getDescriptionOfPerson */

interface People {
  name: string;
  birthPlace: string;
  occupation: string;
}

function getDescriptionOfPerson(person: People): string {
  const description: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return description;
}

const descriptionRes: string = getDescriptionOfPerson({
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
});

console.log(descriptionRes);
