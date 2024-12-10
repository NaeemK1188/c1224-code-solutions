const number: number = 9200;
const street: string = 'Irvine Center Drive';
// const address: string = number + ' ' + street;
const address: string = `${number} ${street}`; // we are adding everything into the string address

console.log('LearningFuze:', address);

const firstName: string = 'Uzair';
const lastName: string = 'Ashraf';
const age: number = 25;

const bio: string = `My name is${firstName} ${lastName} and I am ${age} years old`;
// multi lines literal output the string in multi lines not in one line

console.log('Bio:', bio);

const fruit: string = 'apple';
const item: string = 'pen';

// const applePen: string = fruit + item;
const applePen: string = `${fruit}${item}`;

console.log('I have a', item);
console.log('I have an', fruit);
console.log(applePen);
