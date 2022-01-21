// A palindrome is a word, phrase, number, or another sequence of characters that reads the same backward or forward. This includes capital letters, punctuation, and other special characters.

// Given a string, write a function that checks if the input is a valid palindrome.

// Examples:
// solution("racecar") -> true
// solution("anna") -> true
// solution("12345") -> false
// solution("12321") -> true

// ==============================================

function solution(arr) {
  for (
    let i = 0, j = arr.length - 1;
    i < Math.floor(arr.length / 2);
    ++i, --j
  ) {
    // console.log('arr[i]: ', arr[i], '\tarr[j]: ', arr[j]);
    if (arr[i] !== arr[j]) return false;
  }
  return true;
}

// ==============================================

// solution("racecar") -> true
console.log(solution('racecar'));

// solution("anna") -> true
console.log(solution('anna'));

// solution("12345") -> false
console.log(solution('12345'));

// solution("12321") -> true
console.log(solution('12321'));
