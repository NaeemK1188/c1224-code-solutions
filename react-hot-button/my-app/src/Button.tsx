import { useState } from 'react';
import './Button.css';

type Props = {
  label: string;
};

export function Button({ label }: Props) {
  const [count, setCount] = useState(0);

  let color = '';

  if (count < 3) {
    color = 'Dpurple';
  } else if (count < 6) {
    color = 'Lpurple';
  } else if (count < 9) {
    color = 'Dorange';
  } else if (count < 12) {
    color = 'Lorange';
  } else if (count < 15) {
    color = 'yellow';
  } else if (count < 18) {
    color = 'white';
  }

  return (
    <button
      onClick={() => setCount(count + 1)}
      className={`hot-Button ${color}`}>
      {label}
    </button>
  );
}
