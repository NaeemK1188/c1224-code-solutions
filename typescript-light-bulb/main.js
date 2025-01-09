'use strict';
// alert("JS is working");
let counter = 0;
let tempBulb = '';
let tempContainer = '';
const $lightBulb = document.querySelector('.light-bulb');
// console.log($lightBulb); // test
const $Container = document.querySelector('.container');
// console.log($Container);
if (!$lightBulb || !$Container) {
  throw new Error('$lightBulb or $Container not exist');
}
$lightBulb.addEventListener('click', () => {
  // console.log('light-bulb clicked'); // test
  counter = counter + 1;
  if (!$lightBulb || !$Container) {
    throw new Error('$lightBulb or $Container query failed');
  }
  if (counter % 2 === 1) {
    tempBulb = 'dark';
    tempContainer = 'dark';
  } else {
    tempBulb = 'hot';
    tempContainer = 'hot';
  }
  $lightBulb.className = 'light-bulb' + ' ' + tempBulb;
  $Container.className = 'container' + ' ' + tempContainer;
});
