// Given a string (the input will be in the form of an array of characters), write a function that returns the reverse of the given string.

// Examples:

// solution(["l", "a", "m", "b", "d", "a"]) -> ["a", "d", "b", "m", "a", "l"]
// solution(["I", "'", "m", " ", "a", "w", "e", "s", "o", "m", "e"]) -> ["e", "m", "o", "s", "e", "w", "a", " ", "m", "'", "I"]
// ==============================================

function solution(arr) {
  let out = [];
  for (let i = 0, j = arr.length - 1; i < arr.length; ++i, --j) {
    out[i] = arr[j];
  }
  return out;
}

// ==============================================

// solution(["Jimmy", "Layla", "Bob"]) ➞ 2
console.log(solution(['a', 'b', 'c']));

// solution(["l", "a", "m", "b", "d", "a"]) -> ["a", "d", "b", "m", "a", "l"]
console.log(solution(['l', 'a', 'm', 'b', 'd', 'a']));
