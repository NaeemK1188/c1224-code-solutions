'use strict';
console.log('...');
// it output the (...) on webpage
setTimeout(function () {
  console.log('Hello There');
  // const $h2 = document.createElement('h2'); // we need to append it to the document
  // $h2.textContent = 'Hello There';
  const $h2 = document.querySelector('.message'); // already appended to body
  if (!$h2) {
    throw new Error('$h2 does not exist');
  }
  $h2.textContent = 'Hello There';
  // document.appendChild($h2);
}, 2000);
