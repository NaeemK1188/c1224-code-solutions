'use strict';
const $tabContainer = document.querySelector('.tab-container');
// console.log($tabContainer);
const $tabs = document.querySelectorAll('.tab');
// its an array of tabs
// console.log($tabs[0]);
const $views = document.querySelectorAll('.view'); // output a list of class names [view, view hidden, view hidden]
// console.log($views);
if (!$tabContainer) {
  throw new Error('$tabContainer not exists');
}
// using bubble effect instead of creating three event listeners; we create one for thr parent element
$tabContainer.addEventListener('click', (event) => {
  // we can use HTMLElement.if we don't use type assertion we won't be able to access .matches
  const $eventTarget = event.target;
  const $dataView = $eventTarget.dataset.view;
  // console.log($dataView); // output the value of the dataset
  if ($eventTarget.matches('.tab')) {
    // event.target output the entire code block of <div>
    console.log($eventTarget, 'was clicked');
  } else {
    console.log($eventTarget, 'was not clicked');
  }
  for (let i = 0; i < $tabs.length; i++) {
    if ($eventTarget === $tabs[i]) {
      $tabs[i].className = 'tab active';
      // $views[i].className = 'view'; we can change the view class here instead of using dataset
      // to view the new image and new paragraph
    } else {
      $tabs[i].className = 'tab';
      // $views[i].className = 'hidden';we can change the view class here instead of using dataset
    }
  }
  for (let i = 0; i < $views.length; i++) {
    if ($dataView === $views[i].getAttribute('data-view')) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'hidden';
    }
  }
});
