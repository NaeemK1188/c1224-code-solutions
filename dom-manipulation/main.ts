function handleClick(): void {
  counter = counter + 1;
  // console.log("button was clicked")
  // console.log(counter);
  if (!$hotButton || !$clickCount) {
    throw new Error('$hotButton or $clickCount query failed');
  }

  // console.log($hotButton);
  // console.log(text);
  // setting the textContent of $clickCount on the fly without holding it in a value
  $clickCount.textContent = `click: ${counter}`;
  // below is a different way
  // text = "click:" + " " + counter;
  // manipulate the text and assigning it again to textContent of the clickCount
  // $clickCount.textContent = text;
  if (counter < 4) {
    temp = 'cold';
  } else if (counter < 7) {
    temp = 'cool';
  } else if (counter < 10) {
    temp = 'tepid';
  } else if (counter < 13) {
    temp = 'warm';
  } else if (counter < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  // console.log(temp);
  // $hotButton.className = `"hot-button" ${temp}`;
  $hotButton.className = 'hot-button' + ' ' + temp;
}

let counter: number = 0;
let temp: string = '';

const $hotButton = document.querySelector('.hot-button');
// console.log($hotButton);

const $clickCount = document.querySelector('.click-count');
// console.log($clickCount);
// different way by doing getter or holding the value of text content
// in text we are holding the value in .textContent to manipulate it in the callback function
// let text:string = $clickCount.textContent;

if (!$hotButton) {
  throw new Error('the $hotButton query failed');
}

$hotButton.addEventListener('click', handleClick);
