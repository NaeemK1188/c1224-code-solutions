import { Topic } from './Accordion';
import './TopicCard.css';

type Props = {
  topics: Topic[];
};

export function TopicCard({ topics }: Props) {
  return (
    <div className="container">
      {topics.map((topic) => (
        <div>
          <h2 className="topic">{topic.title}</h2>
          <p className="content">{topic.content}</p>
        </div>
      ))}
    </div>
  );
}
