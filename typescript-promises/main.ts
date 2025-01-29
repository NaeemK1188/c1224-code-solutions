import { takeAChance } from './take-a-chance.js';
// console.log(takeAChance('Hello world'));

// console.log(takeAChance('Noah Khayat')) // output promise is pending because
// we didn't yet handle the reject or resolve of the promise

// assigning the promise object to variable
// assigning message will output the initial state pending
// no resolve or reject
const message = takeAChance('Noah Khayat');
console.log(message);
//  .then((message) => console.log(message)
//   .catch((error) => console.error()

message // this for Promise((resolve,))
  .then((resolve) => console.log(resolve)) // for resolve function
  // this is for Promise((, reject))
  .catch((reject) => console.log(reject.message)) // for reject function
  .finally(() => console.log('the request is completed')); // output at the end of the request
// or console.error(`Error: ${error.message}`))

// or takeAchance('Noah Khayat).then().catch()
// message.then((resolve) => {
//   // console.log("your so lucky");
//   console.log(resolve);
// }).catch((reject) => {
//   console.log(reject.message);
// }).finally(() => {
//   console.log('request completed');
// });
