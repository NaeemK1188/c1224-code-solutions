import { useCallback, useEffect, useState } from 'react';

type Data = {
  //random data
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  //Call useCallback at the top level of your component to cache a function definition between re-renders
  // inside () should be a parameter like variable or property
  const getData = useCallback(() => {
    // fetch data
    return { foo: 'bar' }; // nothing useCallback depends on
    // or changing in every re render so dependencies is empty
  }, []);

  useEffect(() => {
    const data = getData(); // the error, cannot find getData was resolved by making it available
    // as a global variable is  const getData = in line 14
    setData(data); // only taking the closest data not the one in line 10
    // so there no closure that useEffect depends on or changing only get data that it changes
    // every time it get called
    // setCounter is not changing the counter, so it only increment by 1
    setCounter((prev) => prev + 1);
  }, [getData]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
