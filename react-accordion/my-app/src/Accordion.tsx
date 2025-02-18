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
    if (id === openTopicId) {
      setOpenTopicId(undefined);
    } else {
      setOpenTopicId(id);
    }
  }

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
// no, so keep it close. if yes open it. we keep doing this in the loop until we showing the last one and keeping everything close
