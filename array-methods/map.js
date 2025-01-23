'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
// has different way that forEach and has a return value
// const result = prices.map((element) => Math.sqrt(element)); sqrt(i) for every element in the array
// console.log(result);
// // acts properly not like for each
// giving the type allow us to work on the structure of the object. we don't need to create an empty object
const resultArr = prices.map((element) => ({
  price: element,
  sales_price: element / 2,
}));
// each time it will return an array
// so we create arr of objects
console.log('Price Objects:', resultArr);
const formattedArr = prices.map((element) => element.toFixed(2));
console.log(formattedArr);
