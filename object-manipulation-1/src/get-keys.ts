/* exported getKeys */

interface Obj2 {
  firstName: string;
  lastName: string;
}

const obj2: Obj2 = {
  firstName: 'David',
  lastName: 'Thomas',
};

function getKeys(obj2: Obj2): string[] {
  const newArr: string[] = [];
  for (const key in obj2) {
    newArr.push(key);
  }

  return newArr;
}

const input2: string[] = getKeys(obj2);
console.log(input2);
