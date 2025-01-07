/* exported getLastChar */
function getLastChar(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      return str[i];
    }
  }

  return ' '; // it will never reach this return statement
}

const input1: string = getLastChar('LearningFuze');
console.log(input1);
