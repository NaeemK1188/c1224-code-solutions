'use strict';
/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x, y, z) {
  const average = (x + y + z) / 3;
  return average;
}
const result = getAverageOfThreeNumbers(2, 4, 6);
console.log(result);
