'use strict';
// let currentIndex = 0;
// if (event.key === span[$currentIndex].textContent) {
//   currentIndex++
// }
// span[i].className = '';
// span[i + 1].className = 'dark';
let index = 0;
const $spans = document.querySelectorAll('span');
// its wrong it doesn't listen for the span element
// $spans.forEach(span =>
//   span.addEventListener("keydown", (event:KeyboardEvent) => {
//   console.log(event.key)
// }))
// for (const entry of $spans.values())
// {
//   console.log(entry.textContent);
// }
document.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log($spans[index].textContent);
  // console.log(event.code);
  index = index + 1;
});
