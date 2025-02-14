import { FaCheck } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import './ValidatedInput.css'

export function ValidatedInput()
{
  return (
    <div>
      {/* when for and id are matched, when we click on the label it highlight its input */}
      <label className="pass-label" htmlFor="password">Password</label>
      <div className='input-container'>
        <input className="pass-input" type="password" id="password" />
        <CgClose className="x-check" color="red" />
      </div>
      <h5>A password is required</h5>
    </div>
  );
}


 // <h1>
    //   Hello World
    //   <FaCheck className="my-check" color="green" />
    //   <CgClose color="red" />
    // </h1>
