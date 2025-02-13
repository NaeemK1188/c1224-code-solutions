// its like an interface
export type Pokedex = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokedex[];
};

export function PokemonList({ pokedex }: Props) {
  // testing the passed array
  // return <h1>{pokedex[1].number}</h1>
  // for each pokemon do the following(create an array of pokemonNames)
  const pokemonList = pokedex.map((pokemon) => (
    <li>
      <b>{pokemon.name}</b>
    </li>
  ));
  return <ul>{pokemonList}</ul>;
}
