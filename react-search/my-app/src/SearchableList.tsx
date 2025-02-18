import './SearchableList.css';
import { Items } from './Items';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');
  // after trigger input we do filter
  const filtered = quotes.filter((quote) =>
    // for lower case sensitivity
    quote.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );

  return (
    <div className="container">
      {/* onSearch has a value parameter being passed from searchBar, so it must contain the value
      parameter in the setInput
      onSearch is being called in onChange or its related for search bar
      so no search is happening yet */}
      <SearchBar value={input} onSearch={(value) => setInput(value)} />
      {/* we pass filter instead of quotes to the items component
      so it updates based on the user input */}
      <Items quotes={filtered} />
    </div>
  );
}
