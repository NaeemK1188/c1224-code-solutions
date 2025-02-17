import { Banner } from './Banner';
import './RotatingBanner.css';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // creating the state in (phase 2)
  // we set it to 0 to imitate the behavior of the carousel that starts at the first image
  const [currentIndex, setCurrentIndex] = useState(0);
  // const listing = items.map((item) => (
  //   <li>
  //     {item}
  //   </li>

  // ));

  // return (<ul>{listing}</ul>
  //   // output a list of items from App.tsx
  // returns to App.tsx
  // we have 4 components inside RotatingBanner plus the parent so total 5 components
  return (
    <>
      {/* sending from parent to display item2, so it only send one item from the array */}
      <Banner item={items[currentIndex]} />
      {/* adding + after currentIndex - 1 makes it positive again
      the '%' makes it stuck in the length */}
      {/* onclick is updating the Banner by passing new state index */}
      <PrevButton
        onClickPrev={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      {/* we made the indicators reusable which can create as many as
      parent told it or pass to it
      do numItems={3} to create 3 buttons */}
      {/* need to know the button we clicked not the current index */}
      {/* we want to update the current index using the index that is in the for loop in indicators */}
      <Indicators
        numItems={items.length}
        onClickBtn={(index) => setCurrentIndex(index)}
        index={currentIndex}
      />
      <NextButton
        onClickNext={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </>
  );
}
