'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const studentsName = [];
  for (const key in students) {
    studentsName.push(students[key].name);
  }
  return studentsName;
}
const input5 = getStudentNames([
  { name: 'robert' },
  { name: 'Steve' },
  { name: 'Ken' },
]);
console.log(input5);
