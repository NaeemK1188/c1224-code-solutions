'use strict';
/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const description = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return description;
}
const descriptionRes = getDescriptionOfPerson({
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
});
console.log(descriptionRes);
