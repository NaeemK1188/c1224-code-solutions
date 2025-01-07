/* exported isUpperCased */

function isUpperCased(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      return false;
    }
  }

  return true; // after checking all characters in the string, it returns true
  //, which no character was found lowercased
}

let input3: boolean = isUpperCased('LearningFuze');
console.log(input3);

input3 = isUpperCased('JavaScript');
console.log(input3);

input3 = isUpperCased('HTML');
console.log(input3);

input3 = isUpperCased('css');
console.log(input3);

input3 = isUpperCased('PHP');
console.log(input3);
