import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import './ValidatedInput.css';

export function ValidatedInput() {
  // char is a string of characters like an array
  const [char, setChar] = useState('');
  let textContent = '';
  let Xcheck = '';
  let myCheck = '';

  if (char === '') {
    textContent = 'A password is required';
    Xcheck = 'xcheck';
    myCheck = 'hidden';
  } else if (Number(char.length) < 8) {
    textContent = 'password is too short';
    Xcheck = 'xcheck';
    myCheck = 'hidden';
  } else if (Number(char.length) === 8) {
    Xcheck = 'hidden';
    myCheck = 'my-check';
  }

  return (
    <div>
      {/* when for and id are matched, the click on the label it highlight its input */}
      <label className="pass-label" htmlFor="password">
        Password
      </label>
      <div className="input-container">
        <input
          className="pass-input"
          type="password"
          value={char}
          id="password"
          onChange={(event) => setChar(event.target.value)}
        />
        <CgClose className={Xcheck} color="red" />
        <FaCheck className={myCheck} color="green" />
      </div>
      <h5>{textContent}</h5>
    </div>
  );
}
