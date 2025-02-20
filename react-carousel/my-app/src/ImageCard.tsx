import './ImageCard.css';
import { Image } from './App';
type Props = {
  image: Image;
};

export function ImageCard({ image }: Props) {
  return <img className="image-card" src={image.src} alt={image.alt} />;
}
