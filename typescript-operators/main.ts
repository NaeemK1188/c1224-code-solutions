/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };

    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

// --------------------------- Logical AND (&&) Operator-----------------------------------
// looks for the first falsy value. if its true it output right, else it output the left
// it will always logs
// console.log(v1 && 'v1 is truthy');

// console.log(v1 && "v1 is truthy"); // output v1 is truthy because v1 is not null or any falsy type
// // so it check if the first one is true it output the second if false output the right which is
// // why the v2 didn't output v1 is truthy because v2 is null or falsy value
// // falsy values are: null, undefined, NaN, " ", ''
// console.log(v2 && 'v1 is truthy');

// expr1 is true, so it output expr2
// it only logs if the first expr is true, else it wont log

v1 && console.log('v1 is truthy');
v2 && console.log('v1 is truthy');
// --------------------------- Logical AND (&&) Operator-----------------------------------

// ----------------------------- Logical OR (||) Operator-----------------------------------
// OR looks for first truthy value because it will be true any way
// first falsy

// output 'default-value' because both are true not null so it will take first truthy value on the left
const config2 = 'default-value' || v2;

// if both are true the first true is outputted
const config1 = v1 || 'default-value';

console.log('configs', config1, config2);

// ----------------------------- Logical OR (||) Operator-----------------------------------

// -----------------------Nullish coalescing operator(??)-----------------------------------

// both are true, so it will take the first truthy value evaluated like OR
// it will take the second variable if the first one is null or undefined
const cfg1 = v1 ?? 'default-value';
// here it will output the v2 not 'default-value' because its not null or undefined. Its falsy empty string
const cfg2 = v2 ?? 'default-value';

const cfg3 = v3 ?? 'default-value';
console.log('cfgs', cfg1, "'" + cfg2 + "'", cfg3);

// -----------------------Nullish coalescing operator(??)-----------------------------------

// -----------------------Conditional (ternary) operator (?:)-----------------------------------

// evaluates the first one on the left wether the v1 = null or
// if v1.value == 'something', it evaluates to truthy else falsy;
// evaluates the first one on the left whether the v1 = null or not
// const tern1 = (v1.value === 'Something') ? 'truthy' : 'falsy';
const tern1 = v1 ? 'truthy' : 'falsy';

console.log('terns', tern1);

// assigns the first one on the left
const tern2 = v2 ? 'falsy' : 'truthy';
console.log('terns', tern1, tern2);

// -----------------------Conditional (ternary) operator (?:)-----------------------------------

// -------------------------Optional chaining operator (?.)--------------------------------------

const oc1 = v1.value;
console.log(oc1);
// because the variable is declared optional string or undefined
// ? making it undefined
const oc2 = v5.details?.address?.city;

console.log('ocs', oc1, oc2);

// -------------------------Optional chaining operator (?.)--------------------------------------

// -------------------------------Spread syntax (...)-------------------------------------------

// getting copy of the v1 object and adding to it new property
const sObj = { ...v1, foo: 'bar' };

console.log('sObj', sObj);

// adding 100 to the beginning of the array
const sArr = [100, ...v4];
console.log(sArr);

// -------------------------------Spread syntax (...)-------------------------------------------
