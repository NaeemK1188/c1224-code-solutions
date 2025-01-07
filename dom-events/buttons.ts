// ------------------------Click-event-----------------------------------------
function handleClick(event: Event): void {
  console.log('Button Clicked');
  console.log(event);
  console.log(event.target);
}

const $clickButton = document.querySelector('.click-button');

if (!$clickButton) {
  throw new Error('$clickButton does not exist');
}

$clickButton.addEventListener('click', handleClick);

// console.log($clickButton);
// -----------------------click-event---------------------------------------------------------

// -------------------------Mouseover-Event-------------------------------------------------------

function handleMouseOver(event: Event): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $hoverButton = document.querySelector('.hover-button');
// console.log($hoverButton);
if (!$hoverButton) {
  throw new Error('$hoverButton does not exist');
}

$hoverButton.addEventListener('mouseover', handleMouseOver);

// -------------------------Mouseover-Event-------------------------------------------------------

// -------------------------Double-click Event-------------------------------------------------------

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');

// console.log($doubleClickButton);

if (!$doubleClickButton) {
  throw new Error('$doubleClickButton does not exist');
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);

// -------------------------Double-click Event-------------------------------------------------------
