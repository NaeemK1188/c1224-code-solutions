const $openModel = document.querySelector('.open-modal');
const $dismissModel = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModel || !$dismissModel || !$dialog) {
  throw new Error('!$openModel or !$dismissModel or !$dialog not exist');
}

$openModel.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModel.addEventListener('click', () => {
  $dialog.close(); // hide the pop up box
});
// console.log($openModel);
// console.log($dismissModel);
// console.log($dialog);
