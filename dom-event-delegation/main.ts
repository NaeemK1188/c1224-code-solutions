const $taskList = document.querySelector('.task-list');
// console.log($taskList);

if (!$taskList) {
  throw new Error('$taskList does not exist');
}

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement; // eventTarget does not exist outside the callback function, but it has no return
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  // console.log(typeof eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    console.log(
      'closest .task-list-item',
      eventTarget.closest('.task-list-item')
    );
    // eventTarget.remove(); // it will know that the element removed is the child BUTTON of .task-list-item
    // because we have used .closest , but it only remove the clicked button not the entire .task-list-item div
    const $taskListItem = eventTarget.closest('.task-list-item');
    $taskListItem?.remove();
  }
  // console.log("closest-parent:", eventTarget.closest('.task-list-item'));
});
