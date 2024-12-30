/* exported getStudentNames */

interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const studentsName: string[] = [];
  for (const key in students) {
    studentsName.push(students[key].name);
  }

  return studentsName;
}

const input5: string[] = getStudentNames([
  { name: 'robert' },
  { name: 'Steve' },
  { name: 'Ken' },
]);

console.log(input5);
