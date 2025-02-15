import { useState } from 'react';
import './StopWatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [isOn, setIcon] = useState(false); // keep track of the icon. it starts at isOn is false
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(); // <type:NodeJS.Timeout>

  let playIcon = '';
  let pauseIcon = '';

  function handlePlay() {
    console.log('executing handle play');
    //  or use true
    setIcon(!isOn);
    const id = setInterval(() => {
      setCount((prev) => prev + 1); // cause an unstable execution
      // so use prev
    }, 1000);
    setIntervalId(id); // we ar setting the interval id
  }

  function handlePause() {
    setIcon(!isOn);

    clearInterval(intervalId);
  }

  function handleReset() {
    if (!isOn) {
      // because it will start after clicking that changes the state from false to true
      setCount(0);
    }
  }

  if (isOn === false) {
    playIcon = 'play-icon';
    pauseIcon = 'hidden';
    // causing the setInterval to starts from 0 to reach the last counter
  } else if (isOn === true) {
    playIcon = 'hidden';
    pauseIcon = 'pause-icon';
  }

  return (
    <div>
      <div className="circle">
        <p onClick={handleReset} className="counter">
          {count}
        </p>
      </div>
      <FaPlay className={playIcon} color="black" onClick={handlePlay} />
      <FaPause className={pauseIcon} color="black" onClick={handlePause} />
    </div>
  );
}
