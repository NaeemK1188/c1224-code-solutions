/* eslint-disable react-hooks/exhaustive-deps -- Delete this line! */
import { useEffect, useState } from 'react';

// we have 5 functions including arrow functions
export function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(`Time is: ${time}`);
      setTime(time + 1);
      console.log(`Time is: ${time}`);
    }, 1000); // increment the time every second
    return () => clearTimeout(timerId);
    // time is the closure that is always changing and everything else is stalled
  }, [time]);

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
