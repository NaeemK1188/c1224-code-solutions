/* exported getPropertyValue */

interface Humans {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getPropertyValue(person: Humans, key: string): string {
  const propertyValue: string = person[key];
  return propertyValue;
}

const propertyValueRes: string = getPropertyValue(
  { name: 'Ada', occupation: 'countess', birthPlace: 'London, England' },
  'name'
);
console.log(propertyValueRes);
