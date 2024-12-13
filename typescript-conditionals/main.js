'use strict';
function isUnderFive(age) {
  if (age < 5) {
    return true;
  }
  // if person.age == 5, person.age > 5
  else {
    return false;
  }
}
console.log('isUnderFive Function()');
console.log(isUnderFive(4));
console.log(isUnderFive(10));
console.log(isUnderFive(5));
// =========================================================================================
// ======================isEven()=============================================================
function isEven(num) {
  if (num % 2 === 0) {
    // 4/2 = 2 remainder 0
    return true;
  } // 5/2 = 2.1 remainder 1
  else {
    return false;
  }
}
console.log('isEven Function()');
console.log(isEven(4));
console.log(isEven(10));
console.log(isEven(5));
// ==============================================================================
// ==================================startsWithJ()===============================
// string is an array
// const stringnam = "noah";
// console.log(stringnam[stringnam.length - 1]);
function startsWithJ(name) {
  if (name[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('startsWithJ()');
console.log(startsWithJ('Javascript'));
console.log(startsWithJ('PHP'));
console.log(startsWithJ('HTML'));
console.log(startsWithJ('JAVA'));
console.log(startsWithJ('KOTLIN'));
console.log(startsWithJ('C#'));
// ==============================================================================
// ===========================isOldEnoughToDrink()=================================
function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}
console.log('isOldEnoughToDrink()');
console.log(isOldEnoughToDrink({ name: 'Bart William', age: 10 }));
// ============================================================================
// ========================isOldEnoughToDrive()=================================
function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
}
console.log('isOldEnoughToDrive()');
console.log(isOldEnoughToDrive({ name: 'William McCarthy', age: 39 }));
// =============================================================================
// ==========================isOldEnoughToDrinkAndDrive()=======================
function isOldEnoughToDrinkAndDrive(person) {
  if (person.name) {
    return false;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrinkAndDrive()');
console.log(isOldEnoughToDrinkAndDrive({ name: 'William McCarthy', age: 39 }));
// ==================================================================================
// =============================categorizeAcidity()=================================
function isCategorizeAcidity(pH) {
  if (pH === 7) {
    return 'pH is neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'pH is acid';
  } else if (pH > 7 && pH <= 14) {
    return 'pH is base';
  } else {
    return 'invalid pH level';
  }
}
console.log('isCategorizeAcidity()');
console.log(isCategorizeAcidity(-1));
console.log(isCategorizeAcidity(14.000001));
console.log(isCategorizeAcidity(7));
console.log(isCategorizeAcidity(2));
console.log(isCategorizeAcidity(9));
// ===================================================================================
// ================================introduceWarnerBro()===============================
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'We are the warner brothers!';
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro()');
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('cody'));
// ===============================================================================
// =======================recommendMovie()=======================================
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Batman';
    case 'comedy':
      return 'Me and myself';
    case 'horro':
      return 'The friday night';
    case 'drama':
      return 'Napoleon';
    case 'musical':
      return 'High school musical';
    case 'sci-fi':
      return 'interstellar';
    default:
      return 'enter the right genre';
  }
}
console.log('recommendMovie()');
console.log(recommendMovie('action'));
console.log(recommendMovie('comedy'));
console.log(recommendMovie(''));
