import './Image.css';
import { useState } from 'react';

type Props = {
  src: string[]; // it has to be the same type as in the function call
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);
  // its not saving the state when we refresh. It resets it ?

  function handleClick() {
    if (index < src.length - 1) {
      setIndex(index + 1);
    } else if (index === src.length - 1) {
      setIndex(0);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        {/* src= here is an array where we can use any index value*/}
        {/* when we don't handle the onclick, the clicking will get out of the scope of images array and not showing any images */}
        {/* when we use setIndex without handling its scope in the images array, will get out of the scope
        se we need to create a function to handle the clicks scope,
        therefore instead of using () => setIndex(index + 1) () => setIndex(index + 1) we call the function
        handleClick*/}
        <img
          className="image-fill"
          onClick={handleClick}
          src={src[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
