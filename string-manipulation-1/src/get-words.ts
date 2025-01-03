/* exported getWords */

function getWords(str: string): string[] {
  let newArr: string[] = [];

  if (str === '') {
    newArr.pop();
    return newArr;
  } else {
    newArr = str.split(' ');
    return newArr;
  }
}

const input6: string[] = getWords('LearningFuze');
console.log(input6);
