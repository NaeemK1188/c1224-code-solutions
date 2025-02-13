import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setSwitch] = useState(false);
  let container: string = '';
  let active: string = '';
  let label: string = '';

  if (isOn === true) {
    container = 'container-on';
    active = 'active';
    label = 'ON';
  } else if (isOn === false) {
    container = 'container-off';
    active = 'inactive';
    label = 'OFF';
  }

  return (
    <>
      {/* instead of changing the state manually by adding (false) or (true), we need to do
      that dynamically by using jsx */}
      {/* when its clicked the first time, it changes from false to true then it goes through the if statement
      , then when its clicked again, it changes from true to false by using !isOn */}
      <div
        onClick={() => setSwitch(!isOn)}
        className={`Container ${container}`}>
        <div className={`slider slider-off-on ${active}`}></div>
        <span className="off-on">{label}</span>
      </div>
    </>
  );
}
