import { useState } from 'react';

type Props = {
  text: string[];
};

export function Description({ text }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < text.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return <p onClick={handleClick}>{text[index]}</p>;
}
