import { useState } from 'react';

type Props = {
  caption: string[]; // property key is the parameter in function call in App.tsx
  // where the name has the match in both files
};

// property key is the parameter in function call in App.tsx
// where the name has the match in both files
export function Caption({ caption }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < caption.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  // because we have an array of caption strings we can choose any value with the array length
  return <h3 onClick={handleClick}>{caption[index]}</h3>;
}
