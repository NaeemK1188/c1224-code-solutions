/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const getCircleArea: number = Math.PI * (radius * radius);
  return getCircleArea;
}

const output: number = getAreaOfCircle(4.982787485166879);
console.log(output);
