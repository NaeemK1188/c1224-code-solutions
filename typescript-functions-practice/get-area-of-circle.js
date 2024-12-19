'use strict';
/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const getCircleArea = Math.PI * (radius * radius);
  return getCircleArea;
}
const output = getAreaOfCircle(4.982787485166879);
console.log(output);
