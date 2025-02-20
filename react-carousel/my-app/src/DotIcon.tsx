import { GoDot, GoDotFill } from 'react-icons/go';
import './DotIcon.css';

type Props = {
  numImages: number;
  onSelectedDot: (index: number) => void;
  index: number; // sent from the parent the currentState index
};

export function DotIcon({ numImages, onSelectedDot, index }: Props) {
  const arrDot = [];
  for (let i = 0; i < numImages; i++) {
    arrDot.push(
      i === index ? (
        <GoDotFill size="40px" />
      ) : (
        <GoDot
          key={i}
          size="40px"
          // we don't want to touch onClick because its only doing one thing update the state
          onClick={() => onSelectedDot(i)}
        />
      )
    );
  }
  return <div className="dot-container">{arrDot}</div>;
}
