/* exported getValues */

interface Obj3 {
  firstName: string;
  lastName: string;
}

const obj3: Obj3 = {
  firstName: 'David',
  lastName: 'Thomas',
};

function getValues(obj3: Obj3): string[] {
  const newArr: string[] = [];
  for (const key in obj3) {
    newArr.push(obj3[key]);
  }

  return newArr;
}

const input3: string[] = getValues(obj3);
console.log(input3);
