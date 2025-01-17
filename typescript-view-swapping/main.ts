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
$tabContainer.addEventListener('click', (event: Event) => {
  // we can use HTMLElement.if we don't use type assertion we won't be able to access .matches
  // HTMLDivElement has specific properties for div
  const $eventTarget = event.target as HTMLDivElement;
  const $dataView = $eventTarget.dataset.view;
  // console.log($dataView); // output the value of the dataset
  if ($eventTarget.matches('.tab')) {
    // will this .tab refers to $eventTarget
    // event.target output the entire code block of <div>
    console.log($eventTarget, 'was clicked');
  } else {
    console.log($eventTarget, 'was not clicked');
  } // or use return; because if (!eventTarget.matches('tab') return; so if its not the target tab don't return anything)

  for (let i = 0; i < $tabs.length; i++) {
    // in each click the for loop will check each tab index
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
    // compare the target with data-view. both need to have the data-view to compare
    if ($dataView === $views[i].getAttribute('data-view')) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'hidden';
      // views[viewIndex] use names related to the problem
    }
  }
});

// we are suing dataset and not depending
