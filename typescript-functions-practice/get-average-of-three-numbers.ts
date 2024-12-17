/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  const average: number = (x + y + z) / 3;
  return average;
}

const result: number = getAverageOfThreeNumbers(2, 4, 6);
console.log(result);
