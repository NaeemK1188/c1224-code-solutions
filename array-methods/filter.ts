const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const filterArr = numbers.filter((number) => number % 2 === 0);
console.log('Even Numbers', filterArr);

const filterArr1 = names.filter(
  (name) => !name.includes('D') && !name.includes('d')
);
console.log(filterArr1);
// we use && to filter out the result like removing d and D because || will always make the result true
