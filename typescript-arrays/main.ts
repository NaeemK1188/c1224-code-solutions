// ========================COLOR ARRAY============================================================

const colors: string[] = ['red', 'white', 'blue'];
console.log('value of color[0]:', colors[0]);
console.log('value of color[1]:', colors[1]);
console.log('value of color[2]:', colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`); // template literal (``)
colors[2] = 'green';
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('value of colors:', colors);
console.log("the type of colors' arrays:", typeof colors);

// ====================================================================================================
// ================================STUDENT ARRAY=======================================================

const students: string[] = ['Leonardo', 'Donatello', 'Rafael', 'Michelangelo'];

const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex: number = numberOfStudents - 1; // students[students.length - 1]
console.log('the last student in the array is', students[lastIndex]);
console.log('value of students', students);
console.log("the type of students' array:", typeof students);
