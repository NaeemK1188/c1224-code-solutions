interface Calc {
  average: number;
  evens: number[];
  odds: number[];
  range: number[];
  total: number;
}

function getRangeReport(start: number, end: number): Calc {
  const calc: Calc = {
    average: 0,
    evens: [],
    odds: [],
    range: [],
    total: 0,
  };

  let s: number = start;
  let e: number = end;

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
  e = 10;
  // for (let i = s; i <= e; i++) {

  //   calc.average = (calc.total + i) / e;
  //   console.log(calc.average);
  // }

  calc.average = calc.total / e;

  return calc;
}

console.log(getRangeReport(1, 10));
