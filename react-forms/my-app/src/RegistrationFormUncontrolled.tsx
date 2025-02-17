import { FormEvent } from 'react'; // imported automatically by react when adding :FormEvent  <and its type is inside here>
import './RegistrationFormUncontrolled.css';

export function RegistrationFormUncontrolled() {
  // we need to declare the event correct type in order to make the form resets after submission
  // it resets automatically after setting that up
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stops the default behavior of submission
    // const eventTarget = event.target as HTMLFormElement;
    // eventTarget.reset(); to use reset cast the event target to Form element
    // console.log(event.target); // outputting the actual DOM element
    const currentTarget = event.currentTarget as HTMLFormElement;
    console.log(currentTarget); // outputting the actual DOM element

    const formContent = new FormData(currentTarget); // every time we hit submit
    // we create new object without any name holds the key/value pairs of the form elements submitted

    const formObject = Object.fromEntries(formContent.entries());
    // formContent.entries(); it returns all the key value pairs in the form and put in formObject
    // {userName: 'myname', passWord: '12345678'}
    // console.log(formObject.passWord); output the password
    console.log(formObject);
  }

  return (
    // when submitting form
    <form onSubmit={handleSubmit}>
      <label>
        Username <input type="text" name="userName" />
      </label>
      <label>
        Password&nbsp;
        <input type="password" name="passWord" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
