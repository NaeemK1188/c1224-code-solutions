/* exported toObject */

interface Obj4 {
  firstName?: string;
  isCool?: boolean;
  employer?: string;
}

function toObject(objArr: any[]): Obj4 {
  const obj4: Obj4 = {};

  obj4[objArr[0]] = objArr[1];

  return obj4;
}

const input4: Obj4 = toObject(['firstName', 'David']);
console.log(input4);
