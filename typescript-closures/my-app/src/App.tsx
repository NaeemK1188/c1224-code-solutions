import { useState } from 'react';
import { Counter } from './Counter';
import { Timer } from './Timer';

export function App() {
  const [part1, setPart1] = useState(true);
  // if part1 exists(true), show button text 'Switch to Part2', and if its false or else after : show button text
  // Switch to Part 1
  const text = part1 ? 'Switch to Part2' : 'Switch to Part 1';
  return (
    <div>
      {/* if the state at first page part1 is true call Timer function */}
      {part1 && <Timer />}
      {/* if the state is not true or its not at the first page call Counter function */}
      {!part1 && <Counter />}
      {/* setPart1 or the setter always in the events */}
      <button onClick={() => setPart1(!part1)}>{text}</button>
    </div>
  );
}
