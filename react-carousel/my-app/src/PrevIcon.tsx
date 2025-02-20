import { SlArrowLeft } from 'react-icons/sl';
import './PrevIcon.css';

type Props = {
  onSelectPrev: () => void;
};

export function PrevIcon({ onSelectPrev }: Props) {
  return (
    <SlArrowLeft onClick={onSelectPrev} className="prev-icon" size="30px" />
  );
}
