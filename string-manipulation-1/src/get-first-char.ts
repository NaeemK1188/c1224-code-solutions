/* exported getFirstChar */

function getFirstChar(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      return str[i];
    }
  }

  return '';
}

const input: string = getFirstChar('LearningFuze');
console.log(input);
