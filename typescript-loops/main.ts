/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */


// ==================================================================================
// ========================getNumbersToTen()=========================================

function getNumbersToTen():number[] // return type is array of numbers
{
  const numbers:number[] = [];
  let currentNumber = 1;

  while(currentNumber <= 10)
  {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}


console.log('getNumbersToTen()');
console.log(getNumbersToTen())

// ====================================================================================
// ========================getEvenNumbersToTwenty()====================================

function getEvenNumbersToTwenty():number[]
{
  const evenNumbers: number[] = [];
  let currentNumber = 2;

  while (currentNumber <= 20)
  {
    evenNumbers.push(currentNumber);
    currentNumber +=2;
  }

  return evenNumbers;

}


console.log('getEvenNumbersToTwenty()');
console.log(getEvenNumbersToTwenty());
// =================================================================================
// ================================repeatWord(word, times)=======================================

function repeatWord(word:string, times:number):string
{ // times is the upperLimit
  let count:number = 1;
  let repeated:string = ' ';

  while(count <= times)
  {
    // repeated = repeated + "word";
    repeated += word;
    count++;
  }

  return repeated; // it stores the values because string is an array or stored in string repeated

}

console.log("repeatWord(word:string, times:number)")
console.log(repeatWord("javascript", 30));

// =============================================================================================
// ================================logEachCharacter(str)===========================================

function logEachCharacter(str:string):void
{
  for (let i = 0; i < str.length; i++)
  {
    console.log(str[i]);
  }
}

logEachCharacter("javascript");

// ==============================================================================================
// ====================================doubleAll(numbers)========================================

// parameter passed type is array and return type is array
function doubleAll(numbers:number[]):number[]
{
  // uses debugger; for deep debugging
  // call the function in console log
  const doubled:number[] = [];

  for (let i = 0; i < numbers.length; i++)
  {
    // accesses the element of the numbers array at the index i, doubles it, then pushes the result into the doubled array
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

console.log(doubleAll([5, 7, 9, 11]));
// =========================================================================================================
// ====================================sumArray(numbers)===================================================

function sumArray(numbers:number[]):number // passed array parameter from main
{

  let sum:number = 0;
  for (const number of numbers)
  {
    sum = sum + number; // sum = 0 + 5 => sum = 5 + 8 => sum = 13 + 7
  }

  return sum; // => sum = 20

}

console.log("sumArray(numbers[])");
console.log(sumArray([5, 8, 7]));
// ========================================================================================================
// =====================================reverseString(str)=================================================

function reverseString(str:string):string
{
  let reversed:string = '';
  // let lastIndex:number = str.length - 1;
  // normal for-loop reverse
  // for (let i = lastIndex; i >= 0; i-- )
  // {
  //   reversed = reversed + str[i];
  // }

  // for..of reverse
  for (const char of str)
  {
    reversed = char + reversed; // using pre-append
    // = j + '' => a + j => v + aj => a + vaj => s + avaj ....

  }

  return reversed;
}

console.log(reverseString("javascript"));
// ==================================================================================
// ============================getKeys(obj)==========================================

interface Obj
{
  isbn:string;
  title:string;
  author:string
}

const obj: Record<string, unknown> = {
  //  book1:{isbn:"978-883977365", title: "Speaking JS", author:"Axel Rauschmayer"},
  //  book2:{isbn:"778-477465456", title: "impatient programmer py", author:"mike bosni"}
  isbn: '978-883977365',
  title: 'Speaking JS',
  author: 'Axel Rauschmayer'
};





function getKeys(obj:Record<string, unknown>):string[]
{
  const keys:string[] = [];

  for(const key in obj)
  {
    keys.push(key);
  }

  return keys;
}

console.log("getKeys", obj)
console.log(getKeys(obj))
// ==============================================================================================
// =====================================getValues(obj)===========================================

function getValues(obj:Record<string, unknown>):unknown[]
{
  const values:unknown[] = [];

  for(const key in obj)
  {
    values.push(obj[key]);
  }

  return values;
}


console.log("getValues", obj);
console.log(getValues(obj))
