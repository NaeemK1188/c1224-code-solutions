/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
// we have useEffect imported from react like useState
import { useEffect, useState } from 'react';
// mimicking a network fetch call
// we have the function readItems is imported from the read.ts file
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true); // initial value is true passed to is Loading
  // when its false, it should show on the DOM error message, but its not happening because we didnt finish
  // the useEffect that is used in timers and fetch calls
  const [items, setItems] = useState<Item[]>([]); // useState<type item[]> with initial value array
  const [error, setError] = useState<unknown>(); // useState<type Unknown> and initial value is undefined

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`
  // we use useEffect function

  // useEffect is being called with two parameters
  // one is arrow function and the second is dependencies array
  useEffect(() => {
    async function loadItem() {
      // loadItem only runs when its called by function call in line 42
      // Here it if its successful it gets the response items and set the response
      // then, its goes immedietly to finally to update the setIsLoading(false) to show the the items on the DOM
      try {
        const response = await readItems(); // waiting to get all the items from readItems
        // and assigning them to response
        setItems(response); //response array update the cache and trigger the re-render
        // setIsLoading(false); // because we want out items to render on the Dom after loading them successfully
      } catch (error) {
        // same as try, it runs catch and update error state, then running finally to show
        // to remove isLoading state that has message Loading...
        setError(error);
      } finally {
        //runs if the response resolved or rejected
        setIsLoading(false);
      }
    }
    loadItem();
  }, []);

  if (isLoading) {
    // if state is Loading
    return <div>Loading...</div>;
  }

  if (error) {
    // if state is error and the error state is updated with error  return
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  // here if (items get loaded successfully) generate the list of items in the DOM
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
