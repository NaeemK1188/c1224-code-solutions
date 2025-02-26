import { useState, useRef } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  // to get the actual button on the dom
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* when we use setIsOpen(true), it will always be true
      as a fixed value, but when we use !isOpen
      now, it will be dynamic
      so, if its clicked, the value
      will be !(false) = true and it its !(true) = false */}
      <p>This another intro </p>
      <p> this is an intro of the popup exercise</p>
      <button onClick={() => setIsOpen(!isOpen)}>Pop up!</button>

      <p>This is a top paragraph</p>
      {/* by using .current we are accessing the actual Dom button
      passed to the part of the UI or application in Popup */}
      {/* onClose={() => setIsOpen(!isOpen)} is passed from the child when the
      click is triggered from the child */}
      <Popup
        isOpen={isOpen}
        positionTo={btnRef.current}
        onClose={() => setIsOpen(!isOpen)}>
        {/* these are the children. So we are passing the model to Popup to create for us a menu
        so it makes it dynamic */}
        <ul className="listContainer">
          <li> menu item 1</li>
          <li>menu item 2</li>
          <li>menu item 3</li>
          <li>menu item 4</li>
        </ul>
      </Popup>
      <p>This is a bottom paragraph</p>

      {/* we can create many  Popup */}
      {/* <button onClick = {() => setIsOpen(!isOpen)}>Pop up!</button>
      <Popup isOpen={isOpen} positionTo={btnRef.current} onClose={() => setIsOpen(!isOpen)}> */}
      {/* these are the children. So we are passing the model to Popup to create for us a menu
        so it makes it dynamic */}
      {/* <ul className="listContainer">
          <li> menu item 1</li>
          <li>menu item 2</li>
          <li>menu item 3</li>
          <li>menu item 4</li>
        </ul>
      </Popup> */}
    </>
  );
}

export default App;
