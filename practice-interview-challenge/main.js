'use strict';
function getRangeReport(start, end) {
  const calc = {
    average: 0,
    evens: [],
    odds: [],
    range: [],
    total: 0,
  };
  let s = start;
  const e = end;
  for (let i = s; i <= e; i++) {
    calc.range.push(i);
  }
  s = 2;
  for (let i = s; i <= e; i = i + 2) {
    calc.evens.push(i);
  }
  s = 1;
  for (let i = s; i <= e; i = i + 2) {
    calc.odds.push(i);
  }
  s = 0;
  calc.total = 0;
  for (let i = s; i <= e; i++) {
    calc.total = calc.total + i;
  }
  // for (let i = s; i <)
  s = 0;
  for (let i = s; i <= e; i++) {
    calc.average = (calc.total + i) / 10;
  }
  return calc;
}
console.log(getRangeReport(1, 10));
