import './Indicators.css';

export function Indicators() {
  const btnContainer = [];

  for (let i = 0; i < 6; i++) {
    btnContainer.push(
      <button className="btn-indicator">{i.toString()}</button>
    );
  }

  return <div className="indicators-container">{btnContainer}</div>;
}
