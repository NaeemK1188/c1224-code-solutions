// import { useState } from 'react'
import './App.css';
import { PokemonList, Pokedex } from './PokemonList';

const pokedex: Pokedex[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function App() {
  return (
    <>
      <PokemonList pokedex={pokedex} />
    </>
  );
}

export default App;
