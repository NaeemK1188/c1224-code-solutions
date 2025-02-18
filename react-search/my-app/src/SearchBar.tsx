import './SearchBar.css';

type Props = {
  value: string;
  // onSearch got zero items, but on the bottom we have .value
  // so we add value parameter in the onSearch function
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onSearch }: Props) {
  return (
    <label>
      <img
        className="search-magnifier"
        src="/search-solid.svg"
        alt="search magnifier"
      />
      <input
        className="search-bar"
        type="text"
        value={value}
        placeholder="search"
        // passing value in onSearch because the top declaration has value
        onChange={(event) => onSearch(event.target.value)}
      />
    </label>
  );
}
