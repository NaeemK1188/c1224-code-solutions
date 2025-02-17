import './Indicators.css';

// we are getting numItems from parent rotating banner
type Props = {
  // numItems is the length of the array
  numItems: number;
  onClickBtn: (index: number) => void;
  index: number;
};

export function Indicators({ numItems, onClickBtn, index }: Props) {
  const btnContainer = [];

  for (let i = 0; i < numItems; i++) {
    // we need to highlight a button when its selected and when revButton is clicked
    // onClickBtn(i) where the i is the actual index
    btnContainer.push(
      <button
        onClick={() => onClickBtn(i)}
        className="btn-indicator"
        key={i}
        // if backgroundColor: i === index is true make the background blue : else make it white
        style={{ backgroundColor: i === index ? 'lightblue' : 'white' }}>
        {i.toString()}
      </button>
    );
  }

  return <div className="indicators-container">{btnContainer}</div>;
}
