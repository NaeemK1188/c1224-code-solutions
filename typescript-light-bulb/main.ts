// alert("JS is working");
let counter: number = 0;
let tempBulb: string = '';
let tempContainer: string = '';

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
