import './ToggleSwitch.css';

export function ToggleSwitch() {
  return (
    <>
      <div className="Container container-off">
        <div className="slider slider-off-on"></div>
        <span className="off-on">OFF</span>
      </div>
    </>
  );
}
