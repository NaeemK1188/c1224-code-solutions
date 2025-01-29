'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
const user = users.find(({ id }) => id === 2);
console.log('user', user);
const expensiveProduct = products.find(({ price }) => price > 900);
console.log('expensiveProduct', expensiveProduct);
// const array1:number[] = [5, 12, 8, 130, 44];
// // it only finds one value. how we can find multiple values ?
// const found:number[] = array1.find((element) => element > 8)
// console.log(found);
