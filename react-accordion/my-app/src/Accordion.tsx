import { useState } from 'react';
import './Accordion.css';
import { TopicCard } from './TopicCard';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  // the shared state between child and parent which is the id
  // the parent tells the child which topic card to display and which one to close
  // use useState(1, 3, 9) which are the ids in every object in the array of topics
  const [openTopicId, setOpenTopicId] = useState<number>(); // undefined nothing is open, where no initial state is set yet
  // or initial value of the state

  // we want the parent to render or pushing the html to the dom
  function handleSelect(id: number) {
    // first if is handling open and close
    if (id === openTopicId) {
      setOpenTopicId(undefined);
    } else {
      setOpenTopicId(id);
    }
  }
  // we dont execute function definition
  // when triggering the rerender

  return (
    <div>
      {topics.map((topic) => (
        // =topic(single topic from list objects topic card with topic and content) is the element of the array passed in map
        // so its calling the <TopicCard> function to generate a single topicCard
        // we gonna pass the card that is open and false to everything else
        // deciding which one is open and which is not
        // in isOpen the passed value is true or false
        // isOpen(1 === 1) it shows the content
        // we want to make it dynamically showing the content instead of me telling the state the id number
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topic.id === openTopicId}
          // the event has to call the setter function
          // onOpen={() => setOpenTopicId(topic.id)}
          onOpen={() => handleSelect(topic.id)}
        />
        // or using
        // <TopicCard topic={topics[0]} />
        // <TopicCard topic={topics[1]} />
        // <TopicCard topic={topics[2]} />
      ))}
    </div>
  );
}

// when we click on the last one 9, we update the cash and rigger the rerender. we go though the function
// again since we are re rendering. we go through the loop. we check is open(is topicId(1) === the one we clicked on(openTopicId))
// no, so keep it close. if yes open it.

// Another scenario when the onClick event is triggered. When onClick is event is triggered, we call the arrow function onOpen
// the onOpen is called. onOpen is in accordion parent component. We execute it. Inside it, it calls handleSelect(topic.id)
// topic.id is the h1 we clicked on, which is, for example, id 9 from topics given array of objects in the App().
// The hand handleSelect gets called with the id of the h1 that was clicked and has id 9. Inside if/else
// (id:9 === openTopicId:undefined) false not executed. Then is else if(id:9 !== openTopicId:undefined) true. then open it by calling
// setOpenTopicId(id:9). setOpenTopicId 're-render' executes the function 'export function Accordion({ topics }: Props)'.
// which then update the cache with 9 or update the 'openTopicId' with 9 with useState(9 or id)
// and trigger the re-render which is calling 'export function Accordion({ topics }: Props)'.
// the execution skips the function definition because it only executes the function call in order for definition to be executed
// then goes through return () we execute the loop starting with the first topic object with id 1. Then, isOpen boolean
// where topic.id(1) !== openTopicId(9) to dont show it, then we check the next one is not equal, so dont open it. The last one is equal
// so show it. we dont execute the trigger event because its not triggered by a click now everything is close except the last one is
// open. Now, we click again on object id:9 or the last one to close it. We triggered the on click that calls the onOpen function
// that calls handleSelect(topic.id) with the same topic.id that was clicked again that is 9. so we go through if statement. Is
// (id:9 ===openTopicId(9) previously updated ) yes, so make it undefine or close it because undefined doesn't assign any id
// to the object, so it makes content disappear
