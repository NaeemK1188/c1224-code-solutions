import './RegistrationFormUncontrolled.css';

export function RegistrationFormUncontrolled() {
  return (
    <div>
      <label>
        Username <input type="text" />
      </label>
      <label>
        Password&nbsp;
        <input type="text" />
      </label>
      <button>Sign Up</button>
    </div>
  );
}
