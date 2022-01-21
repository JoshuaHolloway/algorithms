// You are given a non-empty array of integers.

// One element appears exactly once, with every other element appearing at least twice, perhaps more.

// Write a function that can find and return the element that appears exactly once.

// Example 1:

// Input: [1,1,2,1]
// Output: 2
// Example 2:

// Input: [1,2,1,2,1,2,80]
// Output: 80
// Note: You should be able to develop a solution that has O(n) time complexity.

// [execution time limit] 4 seconds (js)

// [input] array.integer nums

// [output] integer

// ==============================================

const f = (arr) => {
  const table = {};
  for (let i = 0; i < arr.length; ++i) {
    if (table[arr[i]]) {
      table[arr[i]]++;
    } else {
      table[arr[i]] = 1;
    }
  } // for-i
  // -since we are guaranteed that ONLY ONE element appears exactly once,
  //  we don't need any further processing!

  for (key in table) {
    // console.log(`[${key}]: ${table[key]}`);
    if (table[key] === 1) return Number(key);
  }
};

// ==============================================

console.log(f([1, 1, 2, 1])); // 2
console.log(f([1, 2, 1, 2, 1, 2, 80])); // 80
