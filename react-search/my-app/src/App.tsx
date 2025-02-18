// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { SearchableList } from './SearchableList';

const quotes: string[] = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves.",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant... but scary.",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  'There are some things you can’t share without ending up liking each other.',
  'Ah, music. A magic beyond all we do here!',
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <SearchableList quotes={quotes} />
    </>
  );
}

export default App;
