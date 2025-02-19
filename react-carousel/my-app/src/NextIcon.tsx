import { SlArrowRight } from 'react-icons/sl';
import './NextIcon.css';

type Props = {
  onSelectNext: () => void;
};

export function NextIcon({ onSelectNext }: Props) {
  return (
    <SlArrowRight onClick={onSelectNext} className="next-icon" size="30px" />
  );
}
