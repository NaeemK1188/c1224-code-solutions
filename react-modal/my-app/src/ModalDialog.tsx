import { ReactNode, useEffect, useRef } from 'react';

// we create props to interact with props passed from
// parent like state
type Props = {
  children: ReactNode;
  isOpen: boolean;
  onclose: () => void;
};

export function ModalDialog({ children, isOpen, onclose }: Props) {
  // ref catches DOM element
  console.log('isOpen', isOpen);
  const modal = useRef<HTMLDialogElement>(null);
  // we use useEffect because the compiler doesn't know if it exists or not
  // since it needs to render everything and then the sueRef is executed
  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
      console.log('isOpen', isOpen);
    } else {
      modal.current?.close();
      console.log('isOpen', isOpen);
    }
  }, [isOpen]);

  return (
    // if we don't use ref prop here, it wont be a dialog element
    <dialog ref={modal} onClose={onclose}>
      {/* <h2>Are you really want to delete it?</h2>
        <img src="vite.svg" alt=""onClick={handleCancel}/>
        <button onClick={handleDelete}>Delete</button>
        put all these node elements in the dialog for example */}
      {children}
    </dialog>
  );
}
