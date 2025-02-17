import './App.css';
// import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  return (
    <>
      {/* form cannot be controlled and uncontrolled at the same time */}
      {/* <RegistrationFormUncontrolled /> */}
      <RegistrationFormControlled />
    </>
  );
}

export default App;
