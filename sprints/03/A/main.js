// -Given two strings that include only lowercase alpha characters,
//  str_1 and str_2, write a function that returns a new sorted string
//  that contains any character (only once) that appeared in str_1 or str_2.

// Examples:
// solution("aabbbcccdef", "xxyyzzz") -> "abcdefxyz"
// solution("abc", "abc") -> "abc"

// ==============================================

// -O(n^2) time-complexity.
function solution(str_1, str_2) {
  const arr = [...str_1, ...str_2].sort();

  // console.log('arr: ', arr);

  let out = [];
  const N = arr.length;

  out.push(arr[0]);
  for (let i = 0; i < N; ++i) {
    for (let j = i + 1; arr[i] !== arr[j] && j < N; ++j) {
      // console.log('arr[i]: ', arr[i], '\tarr[j]: ', arr[j]);
      out.push(arr[j]);
      if (arr[i] !== arr[j]) {
        j = N;
      }
    }
  }
  return out.join('');
}

// ==============================================

// -O(n) time-complexity.
// -This is the optimal solution.
function solution2(str_1, str_2) {
  const arr = [...str_1, ...str_2].sort();

  let map = {};
  for (let i = 0; i < arr.length; ++i) {
    map[arr[i]] = arr[i];
  }

  let vals = Object.values(map);
  return vals.join('');
}

// ==============================================

// solution("aabbbcccdef", "xxyyzzz") -> "abcdefxyz"
console.log(solution('aabbbcccdef', 'xxyyzzz')); // "abcdefxyz"
console.log(solution2('aabbbcccdef', 'xxyyzzz')); // "abcdefxyz"

// solution("abc", "abc") -> "abc"
console.log(solution('abc', 'abc')); // "abc"
console.log(solution2('abc', 'abc'));
