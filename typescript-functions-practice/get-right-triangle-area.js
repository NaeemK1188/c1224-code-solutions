'use strict';
/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
  const RightTriangleArea = (base * height) / 2;
  return RightTriangleArea;
}
const area = getRightTriangleArea(3, 4);
console.log(area);
