import { takeAChance } from './take-a-chance.js';
// console.log(takeAChance('Hello world'));

// console.log(takeAChance('Noah Khayat')) // output promise is pending because
// we didn't yet handle the reject or resolve of the promise

// assigning the promise object to variable
const message = takeAChance('Noah Khayat');
console.log(message);
//  .then((message) => console.log(message)
//   .catch((error) => console.error()

message
  .then((succeed) => console.log(succeed))
  .catch((reject) => console.log(reject.message))
  .finally(() => console.log('the operation is completed'));
// or console.error(`Error: ${error.message}`))
