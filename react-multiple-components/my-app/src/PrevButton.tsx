import './PrevButton.css';
// import {Indicators} from './Indicators';

// prev button is connected with header and middle buttons
// so prevButton communicates with header when its clicked
// and communicates with middle buttons indicators when its clicked
// and all that through the parent because children cannot communicate directly
// it has to be through the parent

// now working on phase 3 the event
type Props = {
  onClickPrev: () => void;
};

export function PrevButton({ onClickPrev }: Props) {
  // button onClickPrev only takes a built-in onClick as prop but value is passed from parent
  return (
    <button onClick={onClickPrev} className="Prev-btn">
      Prev
    </button>
  );
}
