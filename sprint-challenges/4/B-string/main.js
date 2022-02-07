// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// solution(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// solution(s) = '_'.

// There are no characters in this string that do not repeat.

// [execution time limit] 4 seconds (js)

// [input] string s

// A string that contains only lowercase English letters.

// [output] char

// The first non-repeating character in s of '_' if there are no characters that do not repeat.

// [JavaScript] Syntax Tips

// ==============================================

const f = (str) => {
  const mp = {};

  let index = 0;
  for (char of str) {
    if (mp[char]) {
      mp[char] = { count: ++mp[char].count, index };
    } else {
      mp[char] = { count: 1, index };
    }
    ++index;
  }

  let arr = [];
  for (key in mp) {
    if (mp[key].count === 1) {
      arr.push(mp[key].index);
    }
  }

  const ch = str[Math.min(...arr)];

  return ch ? ch : '_';
};

// ==============================================

// const g = (mp) => {
//   for (key in mp) {
//     if (mp[key] === 1) {
//     }
//   }
// };

// ==============================================

// For s = "abacabad", the output should be
// solution(s) = 'c'.
console.log(f('abacabad'));

// For s = "abacabaabacaba", the output should be
// solution(s) = '_'.
console.log(f('abacabaabacaba'));
