/* exported getSquareOfNumber */
function getSquareOfNumber(num: number): number {
  const square: number = num ** 2;
  return square;
}

const squareResult: number = getSquareOfNumber(1);
console.log(squareResult);
