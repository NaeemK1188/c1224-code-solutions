import './SearchBar.css';

type Props = {
  quotes: string[];
};

export function Items({ quotes }: Props) {
  return (
    <ul>
      {/* map has an element in the array and its index */}
      {quotes.map((quote, index) => (
        <li key={index}>{quote}</li>
      ))}
      {/* if true(no quotes) output the right hand side */}
      {quotes.length === 0 && <p>No items match the filter</p>}
    </ul>
  );
}
