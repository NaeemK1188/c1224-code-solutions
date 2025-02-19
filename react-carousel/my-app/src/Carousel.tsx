import './Carousel.css';
import { Image } from './App';
import { ImageCard } from './ImageCard';
import { NextIcon } from './NextIcon';
import { PrevIcon } from './PrevIcon';
import { DotIcon } from './DotIcon';
import { useEffect, useState } from 'react';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  // when we change the current index, we will see different image
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  return (
    <div className="container">
      {/* parent sending commands to child to display the image
      using the indexes */}
      <ImageCard image={images[currentIndex]} />
      <NextIcon
        onSelectNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
      />
      <PrevIcon
        onSelectPrev={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      />
      {/* index is the actual i sent from DotIcon */}
      <DotIcon
        numImages={images.length}
        onSelectedDot={(index) => setCurrentIndex(index)}
        index={currentIndex}
      />
    </div>
  );
}
