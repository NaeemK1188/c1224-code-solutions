import './SearchableList.css';
import { Items } from './Items';
import { SearchBar } from './SearchBar';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  return (
    <div className="container">
      <SearchBar />
      <Items quotes={quotes} />
    </div>
  );
}
