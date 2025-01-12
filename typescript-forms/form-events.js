'use strict';
function handleFocus(event) {
  console.log('focus was fired');
  const eventTarget = event.target;
  console.log('event.target.name', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log('event.target.name', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('event.target.name:', eventTarget.name);
  console.log('event.target.value:', eventTarget.value);
}
// using bracket notation we can access specific input with its name attribute
const $inputUserName = document.querySelector("input[name='name']");
const $inputUserEmail = document.querySelector("input[name='email']");
const $textArea = document.querySelector('textarea');
// console.log($inputUserEmail);
// console.log($inputUserName);
if (!$inputUserEmail || !$inputUserName || !$textArea) {
  throw new Error(
    'All $inputUserEmail, $inputUserName, and $textArea not exist'
  );
}
$inputUserName.addEventListener('focus', handleFocus);
$inputUserName.addEventListener('blur', handleBlur);
$inputUserName.addEventListener('input', handleInput);
$inputUserEmail.addEventListener('focus', handleFocus);
$inputUserEmail.addEventListener('blur', handleBlur);
$inputUserEmail.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
