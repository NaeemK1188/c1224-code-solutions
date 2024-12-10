'use strict';
const number = 9200;
const street = 'Irvine Center Drive';
// const address: string = number + ' ' + street;
const address = `${number} ${street}`; // we are adding everything into the string address
console.log('LearningFuze:', address);
const firstName = 'Uzair';
const lastName = 'Ashraf';
const age = 25;
const bio = `My name is${firstName} ${lastName} and I am ${age} years old`;
// multi lines literal output the string in multi lines not in one line
console.log('Bio:', bio);
const fruit = 'apple';
const item = 'pen';
// const applePen: string = fruit + item;
const applePen = `${fruit}${item}`;
console.log('I have a', item);
console.log('I have an', fruit);
console.log(applePen);
