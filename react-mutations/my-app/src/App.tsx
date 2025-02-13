/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { PokemonList, Pokemon } from './PokemonList';
import './App.css';

export function App() {
  // useState is a function that holds an array of objects pokemons objects
  //and assigning it to pokedex as an initial state
  //pokedex is an array
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    // const addArr:Pokemon[] = pokedex.map((i) => (i.number ===  )
    // pokedex[5].number = '332';
    // pokedex[5].name = 'Venusaur';
    // setPokedex(() => pokedex.concat(pokedex[5]));
    const newPokemon = {
      number: '002',
      name: 'Venusaur',
    };

    setPokedex(pokedex.concat(newPokemon)); // keeps adding he same thing for evert
    //setPokeDex([...pokedex, p]);use the existing pokedex array and add new object to it
  }

  function handleUpdate(): void {
    const newPokemon = {
      number: '001',
      name: 'Venusaur',
    };

    // has to be the same id to update
    setPokedex(
      pokedex.map((pokemon) =>
        pokemon.number === newPokemon.number ? newPokemon : pokemon
      )
    );
  }

  function handleRemove(): void {
    const newPokemon = {
      number: '001',
      name: 'Venusaur',
    };

    // if old is different
    // goes through every element. If all ids not equal this id add all items to the list except the id im comparing
    // if it equal return the same thing
    setPokedex(
      pokedex.filter((pokemon) => pokemon.number !== newPokemon.number)
    );
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
