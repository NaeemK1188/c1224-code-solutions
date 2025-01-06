/* exported oddOrEven */

function oddOrEven(arrNum: number[]): string[] {
  const arrStr: string[] = [];

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      arrStr.push('even');
    } else {
      arrStr.push('odd');
    }
  }

  return arrStr;
}

const input12: string[] = oddOrEven([1, 2, 3]);
console.log(input12);
