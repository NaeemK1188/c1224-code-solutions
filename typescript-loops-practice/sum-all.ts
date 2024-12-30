/* exported sumAll */
function sumAll(numArr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }

  return sum;
}

let input1: number = sumAll([1, 2, 3]);
console.log(input1);

input1 = sumAll([1200, 1, 0]);
console.log(input1);

input1 = sumAll([999, 102, 234, 23, 90909, 25]);
console.log(input1);
