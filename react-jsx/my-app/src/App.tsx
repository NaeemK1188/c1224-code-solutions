import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks:{count}
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
          1.What is JSX ? Allows developers to write the code for dynamic DOM
          creation in a syntax that is very similar to standard HTML and then
          get converted to js and rendered to the web browser
        </p>
        <p>
          2.How does React use JSX to render components ? converts jsx into
          javascript structure, so a browser can read
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
