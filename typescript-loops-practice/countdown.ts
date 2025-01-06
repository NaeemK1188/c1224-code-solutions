/* exported countdown */
function countdown(num: number): number[] {
  const numArr: number[] = [];

  for (let i = num; i >= 0; i--) {
    numArr.push(i);
  }

  return numArr;
}

const input: number[] = countdown(2);
console.log(input);
