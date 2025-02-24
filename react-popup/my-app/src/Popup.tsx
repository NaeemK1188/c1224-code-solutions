import { createPortal } from 'react-dom';
import './Popup.css';
// import { useEffect, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  // null because typescript thinks it doesn't exist
  positionTo: HTMLElement | null; // adding PositionTo, to control
  // what is passed from App which is the actual DOM button
  onClose: () => void;
  children: ReactNode;
};

export function Popup({ isOpen, positionTo, onClose, children }: Props) {
  // we need a state here for when the contents are hidden or shown
  // or the list will always appears in the DOM
  // use effect is a lifecycle function that monitor
  // the changes in of the reference of the DOM element
  // useEffect(() => {
  //   // if btnRef. current or the dom element exists
  //   if (positionTo)
  //   {
  //     // getting the surrounding of the DOM element
  //     const r = positionTo.getBoundingClientRect();
  //     const top = r ? r.top + r.height : "50%";
  //     const left = r ? r.left + r.width/ 2 : "50%";
  //   }
  // }, [positionTo]);
  // we will be using top and left in the values of the left and top style's properties
  // instead of left="540px", it will be {left}, and instead of top="440px", it will be {top}
  // place the menu relative to the button
  // to get where is the button on the page, we use getBoundingClientRect()
  // the getBoundingClientRect(); didnt work with the
  // return (isOpen && createPortal(<div className="Container" style={{position:"absolute", left, top}}></div>
  // so we use the if/else
  if (!isOpen) {
    return null;
  }
  // else
  // r holds the button passed from App()
  // if r exists, which is passed from App() by ref, else it will
  // put button in the middle of the screen
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '52%';
  const left = r ? r.left + r.width / 2 : '47%';
  return createPortal(
    <>
      {/* this shade is on the top of everything */}
      {/* communicating with the parent by using event handlers from child component */}
      {/* the event is triggered when we click on the div with shade in the child component */}
      <div className="shade" style={{ opacity: '0.1' }} onClick={onClose} />
      <div className="Container" style={{ position: 'absolute', left, top }}>
        {children}
      </div>
    </>,
    document.body
  );
}
