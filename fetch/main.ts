// ------------------------------UserData------------------------------------------
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // default for fetch() is GET method

    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`);
      // using template literal lets us avoid the error type here
    }

    // console.log(response); // here output the status is 200 okay
    // console.log(response.ok); // return true because ok is boolean
    // const data:Data[] = (await response.json()) as Data; //using Data[] to access each index
    const data = (await response.json()) as UserData;
    console.log(data); // the output is not organized as the data model on the top when we collapse each array element ?
    // console.log(data[0].company.catchPhrase); // accessing the array data
  } catch (error) {
    console.error('Error:', error);
  }
}

// console.log(fetchData());
// const newData = fetchData();
// console.log(newData); // unable to access the data ?

fetchUsers();

// ------------------------------UserData------------------------------------------

// -------------------------------PokemonData--------------------------------------

interface Ability {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Version;
}

interface Move {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Sprite {
  back_default: string;
  back_female: null;
  back_shiny: string;
}

interface Stat {
  name: string;
  url: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

interface PokemonData {
  abilities: Ability;
  base_experience: number;
  forms: Form;
  game_indices: GameIndex;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move;
  name: string;
  order: number;
  species: Species;
  sprites: Sprite;
  stats: Stats;
  types: Types;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  try {
    // use name or id of your favorite pokemon to get the limited number of pokemons
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5');
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/4');

    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`);
    }
    // we dont need to create an interface for the pokemon. It will output all the properties in each pokemon
    // we only create interface to manipulate data in the
    // do we need to create interface ?
    const pokemon = (await response.json()) as PokemonData;

    console.log(pokemon);
  } catch (error) {
    console.error('Error', error);
  }
}

fetchPokemon();

// -------------------------------PokemonData--------------------------------------
