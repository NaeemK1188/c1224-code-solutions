/* exported getRightTriangleArea */
function getRightTriangleArea(base: number, height: number): number {
  const RightTriangleArea: number = (base * height) / 2;
  return RightTriangleArea;
}

const area: number = getRightTriangleArea(3, 4);
console.log(area);
