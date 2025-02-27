import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// how to make test fails ? expect(evenNumbers([4, 6, 1, 23, 4, 8])).

// individual test
test('Returns a new array that contains only the even numbers in the given array.', () => {
  expect(evenNumbers([4, 6, 1, 23, 4, 8])).toEqual([4, 6, 4, 8]);
  expect(evenNumbers([4, 6, 1, 23, -4, 8])).not.toEqual([4, 6, 1, 23, -4, 8]);
  // edge cases
  expect(evenNumbers([1, 3, 5])).toEqual([]);
  expect(evenNumbers([])).toEqual([]);
});

// group testing for all functions
// describe('evenNumbers', () => {
//   it('returns the even numbers', () => {
//     const numbers = [1, 4, 5, 10, 0];
//     const result = evenNumbers(numbers);
//     expect(result).toEqual([4, 10, 0]);
//   });
// });

// use toEqual TO Check the actual value\
// toBe() checks the reference
test('Returns a number formatted in dollars and cents.', () => {
  expect(toDollars(13.23)).toEqual('$13.23');
  expect(toDollars(0.23)).toEqual('$0.23');
  expect(toDollars(0)).toEqual('$0.00');
});

test(`Returns a new array of numbers where every entry has been divided by the
 given divisor`, () => {
  expect(divideBy([2, 1, 6, 0], 2)).toEqual([1, 0.5, 3, 0]);
  expect(divideBy([2, 1, 6, 0], 0)).toEqual([
    Infinity,
    Infinity,
    Infinity,
    NaN,
  ]);
});

test('given divisor. Does not modify the original array.', () => {
  // The code above creates a new array instance on line 43 and another new
  // instance on line 44. So input and output will never be the same instance.
  // Therefore, this test will always pass, even if the divideBy
  // function is implemented incorrectly.
  const input = divideBy([2, 1, 6, 0], 2);
  const outPut = [1, 0.5, 3, 0];

  // this approach causes an error modifies the original array ?
  // const input:number[] = [2, 1, 6, 0];
  // const outPut:number[] = divideBy(input, 2);

  // .not.toBe() checks if its not the same reference or not modifying the same array
  // it create new array or instance which is outPut
  expect(input).not.toBe(outPut);
});

test(`Modifies an object by multiplying the value of each key, but only if that
    value is a number.`, () => {
  expect(multiplyBy({ a: 1, c: 3, foo: 'bar' }, 2)).toEqual({
    a: 2,
    c: 6,
    foo: 'bar',
  });
});
