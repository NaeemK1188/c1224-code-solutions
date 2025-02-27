/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _1 * 1_ = O(1) execute one time in the function and 1 is instruction or variable
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // 1_ * _1 = O(1)
    i < words.length; // _1 * n_ = O(n) executes many times inside the loop
    i++ // _1 * n_ = O(n) ++ = O(n)
  ) {
    const word = words[i]; // _1 * n_ = O(n)
    if (!seen[word]) {
      // _1 * n_ = O(n)
      seen[word] = true; // 1_ * n_ = O(n)
      unique[unique.length] = word; // 1_ * n_ = O(n) executed many times so its n
    }
  }
  return unique; // _1 * 1_ = O(1) executed once
} // Big O Notation for uniqueLinear: O(n) = n + n+ n + n + .... = n, n is number of elements in word array

function uniqueQuadratic(words) {
  const unique = []; // _1 * 1_ = O(n)
  for (
    let i = 0; // 1_ * 1_ = O(1)
    i < words.length; // 1_ * n_ = O(n)
    i++ // _1 * n_ = O(n)
  ) {
    const word = words[i]; // _1 * n_ = O(n)
    let isUnique = true; // _1 * n_ = O(n)
    for (
      let c = 0; // _1 * 1_ = O(n) This executes n times, once each time through the outer loop.
      c < i; // _1 *n_ = O(n^2)
      c++ // _2 * n_ = O(n^2) because we have n from outer loop and second n from inner loop
    ) {
      const comparing = words[c]; // _2 * n^2_ = O(n^2)
      if (comparing === word) {
        // _1 * n^2_ = O(n^2)
        isUnique = false; // 1_ * n^2_ = O(n^2) executes if the if is truthy
      }
    }
    if (isUnique) {
      // _1 * n_ = O(n)
      unique[unique.length] = word; // _2 * n_ = O(n)
    }
  }
  return unique; // 1_ * 1_ = O(1) we have one operation and and executes 1
} // Big O Notation for uniqueQuadratic: O(n^2) because the largest time complexity is n^2
