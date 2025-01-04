/* exported setValue */

interface Obj1 {
  firstName: string;
  lastName?: string;
}

const obj1: Obj1 = {
  firstName: 'Dave',
};

function setValue(obj1: Obj1, key: string, value: string): void {
  obj1[key] = value;
}

setValue(obj1, 'lastName', 'Thomas');

console.log(obj1);
