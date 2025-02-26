import { useState } from 'react';

// import { useRef } from 'react';
import { ModalDialog } from './ModalDialog';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)
  // starts with false or closed dialog
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  function handleCancel() {
    // modal.current?.close();
    setIsOpenDialog(false);
  }

  function handleDelete() {
    alert('its deleted');
    // modal.current?.close();
    setIsOpenDialog(false);
  }

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* we can put any function inside the onClick */}
      {/* its .? because typescript think dialog not exists, so still null because useRef waits until
      everything is rendered in the component to get the reference of the dialog  */}

      {/* <button onClick={() => modal.current?.showModal()}>Delete Me!</button> */}
      <button onClick={() => setIsOpenDialog(true)}>Delete Me!</button>

      {/* the onclose arbitrary function was declared as a arrow function in child component
      ModalDialog, so it has to match the same structure in ModalDialog */}

      <ModalDialog isOpen={isOpenDialog} onclose={() => setIsOpenDialog(false)}>
        {/* p, buttons are are the children that can be used any where */}
        <p>Are you really want to delete it?</p>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </ModalDialog>
      {/* we can create many ModalDialogs, and dialog model in
      ModalDialogs, wil create a dialogs for us  */}
      {/* <button onClick={() => setIsOpenDialog(true)}>Delete Me!</button>
      <ModalDialog isOpen={isOpenDialog} onclose={() => setIsOpenDialog(false)}> */}
      {/* p, buttons are are the children that can be used any where */}
      {/* <p>Are you really want to delete it?</p>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </ModalDialog> */}
    </>
  );
}

export default App;
