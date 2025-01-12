'use strict';
const $contactForm = document.querySelector('form');
// console.log($contactForm); // output the entire form block
// console.log($contactForm.elements); // output formControlCollection or number of (input, textArea, and button)
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log('form submitted') testing submit event
  // submit only applied on the form element object
  const formElements = $contactForm.elements; // the elements in form are type formElements
  // which is name and email are now type HTMLInputElement and message is type HTMLTextAreaElement
  const messageData = {};
  messageData.name = formElements.name.value;
  messageData.email = formElements.email.value;
  messageData.message = formElements.message.value;
  console.log('messageData', messageData);
  // $contactForm.reset(); resetting the page after submission via javascript
});
