'use strict';
// alert("JS is working");
let counter = 0;
const $lightBulb = document.querySelector('.light-bulb');
console.log($lightBulb);
if (!$lightBulb) {
  throw new Error('$lightBulb not exist');
}
$lightBulb.addEventListener('click', (event) => {
  console.log('light-bulb clicked');
});
