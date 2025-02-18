import { Topic } from './Accordion';
import './TopicCard.css';

type Props = {
  topic: Topic;
  isOpen: boolean;
  // can parent figure out which topic is clicked on if its not the child needs to tell it
  // argument in () the info we are telling the parent
  onOpen: () => void;
};
// displays a single topic one card displays one object:topic(h1) and content(p)
// and the one telling the child topic card to render a single topicCard is parent Accordion

export function TopicCard({ topic, isOpen, onOpen }: Props) {
  return (
    <div className="container">
      <h2 onClick={onOpen} className="topic">
        {topic.title}
      </h2>
      {/* if isOpen is true render the topic content on display, else
      don't render anything */}
      {isOpen && <p className="content">{topic.content}</p>}
    </div>
  );
}
