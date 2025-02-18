import './SearchBar.css';

type Props = {
  quotes: string[];
};

export function Items({ quotes }: Props) {
  return (
    <ul>
      {quotes.map((quote) => (
        <li>{quote}</li>
      ))}
    </ul>
  );
}
