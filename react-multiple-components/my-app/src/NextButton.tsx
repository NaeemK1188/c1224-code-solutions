import './NextButton.css';

type Props = {
  onClickNext: () => void;
};

export function NextButton({ onClickNext }: Props) {
  return (
    <button onClick={onClickNext} className="Next-btn">
      Next
    </button>
  );
}
