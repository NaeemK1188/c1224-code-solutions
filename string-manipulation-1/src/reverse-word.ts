/* exported reverseWord */

function reverseWord(str: string): string {
  let newStr: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

let input7: string = reverseWord('foo');
console.log(input7);

input7 = reverseWord('rab');
console.log(input7);

input7 = reverseWord('LearningFuze');
console.log(input7);

input7 = reverseWord('tpircSavaJ');
console.log(input7);

input7 = reverseWord('racecar');
console.log(input7);
