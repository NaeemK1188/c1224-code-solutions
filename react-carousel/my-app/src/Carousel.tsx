import './Carousel.css';
import { Image } from './App';
import { ImageCard } from './ImageCard';
import { NextIcon } from './NextIcon';
import { PrevIcon } from './PrevIcon';
import { DotIcon } from './DotIcon';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  return (
    <div className="container">
      {/* parent sending commands to child to display the image
      using the indexes */}
      <ImageCard image={images[5]} />
      <NextIcon />
      <PrevIcon />
      <DotIcon />
    </div>
  );
}
