"use strict";
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
function getNumbersToTen() {
    const numbers = [];
    let currentNumber = 1;
    while (currentNumber <= 10) {
        numbers.push(currentNumber);
        currentNumber++;
    }
    return numbers;
}
console.log('getNumbersToTen()');
console.log(getNumbersToTen());
// ====================================================================================
// ========================getEvenNumbersToTwenty()====================================
function getEvenNumbersToTwenty() {
    const evenNumbers = [];
    let currentNumber = 2;
    while (currentNumber <= 20) {
        evenNumbers.push(currentNumber);
        currentNumber += 2;
    }
    return evenNumbers;
}
console.log('getEvenNumbersToTwenty()');
console.log(getEvenNumbersToTwenty());
// =================================================================================
// ================================repeatWord(word, times)=======================================
function repeatWord(word, times) {
    let count = 1;
    let repeated = ' ';
    while (count <= times) {
        // repeated = repeated + "word";
        repeated += word;
        count++;
    }
    return repeated; // it stores the values because string is an array or stored in string repeated
}
console.log("repeatWord(word:string, times:number)");
console.log(repeatWord("javascript", 30));
// =============================================================================================
// ================================logEachCharacter(str)===========================================
function logEachCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
logEachCharacter("javascript");
// ==============================================================================================
// ====================================doubleAll(numbers)========================================
// parameter passed type is array and return type is array
function doubleAll(numbers) {
    // uses debugger; for deep debugging
    // call the function in console log
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        // accesses the element of the numbers array at the index i, doubles it, then pushes the result into the doubled array
        doubled.push(numbers[i] * 2);
    }
    return doubled;
}
console.log(doubleAll([5, 7, 9, 11]));
// =========================================================================================================
// ====================================sumArray(numbers)===================================================
function sumArray(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number; // sum = 0 + 5 => sum = 5 + 8 => sum = 13 + 7
    }
    return sum; // => sum = 20
}
console.log("sumArray(numbers[])");
console.log(sumArray([5, 8, 7]));
// ========================================================================================================
// =====================================reverseString(str)=================================================
function reverseString(str) {
    let reversed = '';
    // let lastIndex:number = str.length - 1;
    // normal for-loop reverse
    // for (let i = lastIndex; i >= 0; i-- )
    // {
    //   reversed = reversed + str[i];
    // }
    // for..of reverse
    for (const char of str) {
        reversed = char + reversed; // using pre-append
        // = j + '' => a + j => v + aj => a + vaj => s + avaj ....
    }
    return reversed;
}
console.log(reverseString("javascript"));
const obj = {
    //  book1:{isbn:"978-883977365", title: "Speaking JS", author:"Axel Rauschmayer"},
    //  book2:{isbn:"778-477465456", title: "impatient programmer py", author:"mike bosni"}
    isbn: '978-883977365',
    title: 'Speaking JS',
    author: 'Axel Rauschmayer'
};
function getKeys(obj) {
    const keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;
}
console.log("getKeys", obj);
console.log(getKeys(obj));
// ==============================================================================================
// =====================================getValues(obj)===========================================
function getValues(obj) {
    const values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
}
console.log("getValues", obj);
console.log(getValues(obj));
