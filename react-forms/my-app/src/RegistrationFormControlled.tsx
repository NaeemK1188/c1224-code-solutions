import './RegistrationFormUncontrolled.css';
import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(userName);
    const state = {
      username: userName,
      password: passWord,
    };

    console.log(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password&nbsp;
        <input
          type="password"
          name="passWord"
          value={passWord}
          onChange={(event) => setPassWord(event.target.value)}
        />
      </label>
      <button>Sign Up</button>
      {/* output to the web browser */}
      {userName !== '' && <p>username is {userName}</p>}
      {passWord !== '' && <p>password is {passWord} </p>}
    </form>
  );
}
