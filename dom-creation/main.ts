interface Pokemon {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

function renderPokemon(pokemon: Pokemon): HTMLDivElement {
  const $secondGrandParentDiv = document.createElement('div');
  $secondGrandParentDiv.setAttribute('class', 'column-third');
  // document.body.appendChild($secondGrandParentDiv);
  // $secondGrandParentDiv.className = 'column-third';
  // console.log($secondGrandParentDiv);
  const $firstGrandParentDiv = document.createElement('div');
  $firstGrandParentDiv.setAttribute('class', 'pokemon-card');
  $secondGrandParentDiv.appendChild($firstGrandParentDiv);

  const $imgChildFirst = document.createElement('img');
  $imgChildFirst.setAttribute('src', pokemon.imageUrl);
  $firstGrandParentDiv.appendChild($imgChildFirst);

  const $divChildFirst = document.createElement('div');
  $divChildFirst.setAttribute('class', 'pokemon-card-text');
  $firstGrandParentDiv.appendChild($divChildFirst);

  const $h2ChildParent = document.createElement('h2');
  $h2ChildParent.textContent = pokemon.name;
  $divChildFirst.appendChild($h2ChildParent);

  const $h3ChildParent = document.createElement('h3');
  $h3ChildParent.textContent = pokemon.number;
  $divChildFirst.appendChild($h3ChildParent);

  const $pChildParent = document.createElement('p');
  $pChildParent.textContent = pokemon.description;
  $divChildFirst.appendChild($pChildParent);

  return $secondGrandParentDiv;
}

const pokedex: Pokemon[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

// const $secondGrandParentDiv = document.createElement('div');
// $secondGrandParentDiv.setAttribute('class', 'column-third');
// // $secondGrandParentDiv.className = 'column-third';
// console.log($secondGrandParentDiv);

const $rowDivElement = document.querySelector('.row');

if (!$rowDivElement) {
  throw new Error('$rowDivElement query failed');
}

for (let i = 0; i < pokedex.length; i++) {
  $rowDivElement.appendChild(renderPokemon(pokedex[i]));
}

// console.log(renderPokemon(pokedex[2]));
