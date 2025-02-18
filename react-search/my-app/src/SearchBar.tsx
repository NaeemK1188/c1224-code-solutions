import './SearchBar.css';

export function SearchBar() {
  return (
    <label>
      <img
        className="search-magnifier"
        src="/search-solid.svg"
        alt="search magnifier"
      />
      <input className="search-bar" value="" placeholder="search" />
    </label>
  );
}
