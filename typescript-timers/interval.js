'use strict';
let counter = 4;
const $h2 = document.querySelector('.countdown-display');
if (!$h2) {
  throw new Error('$h2 does not exist');
}
const interval = setInterval(function () {
  console.log('counter', counter);
  $h2.textContent = String(counter);
  counter--;
  if (counter < 0) {
    clearInterval(interval); // stops the interval at 4
    console.log('~Earth Beeeelooowww Us~');
    $h2.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
