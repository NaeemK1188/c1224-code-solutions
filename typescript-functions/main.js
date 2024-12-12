'use strict';
function callOtherFunction(otherFunction, param) {
  return otherFunction(param);
}
function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
function greet(name) {
  const result = `Hey ${name}`;
  return result;
}
/* const getArea = (width:number, height:number):number =>{
  return width * height;
}
*/
// implicit return arrow function
const getArea = (width, height) => width * height;
const getFirstName = (person) => person.firstName;
// const getLastElement = (array:any[]):string => array[array.length - 1];
const getLastElement = (array) => {
  const len = array.length;
  return array[len - 1];
};
let totalMinutes = convertMinutesToSeconds(5);
console.log('total seconds:', totalMinutes);
totalMinutes = convertMinutesToSeconds(10);
console.log('total seconds:', totalMinutes);
let greetName = greet('Beavis');
console.log(greetName);
greetName = greet('SpongeBob');
console.log(greetName);
console.log(getArea(17, 42));
console.log(getArea(22, 38));
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));
console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']));
