'use strict';
// let currentIndex = 0;
// if (event.key === span[$currentIndex].textContent) {
//   currentIndex++
// }
// span[i].className = '';
// span[i + 1].className = 'dark';
let index = 0;
// let temp:string = "";
const $spans = document.querySelectorAll('span');
document.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // console.log($spans[index].textContent);
  // console.log(event.code);
  console.log('index', index);
  console.log('spans length', $spans.length);
  if (event.key === $spans[index].textContent) {
    // $spans[index].classList.toggle('.char.green'); how to use toggle to switch classes ?
    $spans[index].className = 'char green';
    $spans[index + 1].className = 'char dark';
    index = index + 1;
  } else {
    // $spans[index].classList.toggle('.char.red'); // how to use toggle to switch classes ?
    $spans[index].className = 'char red'; // changing the name of the class
  }
  // index = index + 1; // causing the index to move to the next character anyway if its right or wrong
});
// its wrong it doesn't listen for the span element using forEach
// $spans.forEach(span =>
//   span.addEventListener("keydown", (event:KeyboardEvent) => {
//   console.log(event.key)
// }))
// for (const entry of $spans.values())
// {
//   console.log(entry.textContent);
// }
