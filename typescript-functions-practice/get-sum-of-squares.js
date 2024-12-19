'use strict';
/* exported getSumOfSquares */
function getSumOfSquares(x, y) {
  const sumSquares = x ** 2 + y ** 2;
  return sumSquares;
}
const sumSquaresResult = getSumOfSquares(4, 5);
console.log(sumSquaresResult);
