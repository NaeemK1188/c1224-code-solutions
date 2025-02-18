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
  return <TopicCard topics={topics} />;
}
