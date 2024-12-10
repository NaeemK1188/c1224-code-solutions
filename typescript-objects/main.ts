interface Studentprops {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: Studentprops = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 35,
};

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log(`value of fullName ${fullName}`);
