/* exported getSumOfSquares */
function getSumOfSquares(x: number, y: number): number {
  const sumSquares: number = x ** 2 + y ** 2;
  return sumSquares;
}

const sumSquaresResult: number = getSumOfSquares(4, 5);
console.log(sumSquaresResult);
