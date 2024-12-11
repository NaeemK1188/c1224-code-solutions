'use strict';
const student = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 35,
};
const pet = {
  name: 'fluffy',
  kind: 'British',
};
const vehicle = {
  make: 'SoroSuub',
  model: 'Landspeeder',
  year: '20BBY',
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(`value of fullName: ${fullName}`);
student.livesInIrvine = false;
console.log(`value of student.livesInIrvine: ${student.livesInIrvine}`);
student.previousOccupation = 'student';
console.log(
  `value of student.previousOccupation: ${student.previousOccupation}`
);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
vehicle['color'] = 'White';
vehicle['isConvertible'] = true;
console.log(`value of vehicle["color"]: ${vehicle['color']}`);
console.log(`value of vehicle["isConvertible"]: ${vehicle['isConvertible']}`);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
delete pet.name;
delete pet.kind;
console.log('value of pet', pet);
console.log('typeof pet', typeof pet);
