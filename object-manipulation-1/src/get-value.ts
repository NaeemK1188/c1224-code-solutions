/* exported getValue */

interface Obj {
  firstName: string;
  lastName: string;
}

const obj: Obj = {
  firstName: 'David',
  lastName: 'Thomas',
};

function getValue(obj: Obj, key: string): string {
  return obj[key];
}

const input: string = getValue(obj, 'firstName');
console.log(input);
