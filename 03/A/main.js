// -Given two strings that include only lowercase alpha characters,
//  str_1 and str_2, write a function that returns a new sorted string
//  that contains any character (only once) that appeared in str_1 or str_2.

// Examples:
// solution("aabbbcccdef", "xxyyzzz") -> "abcdefxyz"
// solution("abc", "abc") -> "abc"

// ==============================================

function solution(str_1, str_2) {
  const arr = [...str_1.split(''), ...str_2.split('')].sort();

  console.log('arr: ', arr);

  let out = [];
  const N = arr.length;
  for (let i = 0; i < N; ++i) {
    let current = arr[i];

    for (let j = i; j < N; ++j) {
      console.log(
        'i: ',
        i,
        '\tj:',
        j,
        '\tarr[i]: ',
        arr[i],
        '\tarr[j]: ',
        arr[j]
      );

      if (current !== arr[j]) {
        out.push(current);
        console.log('i: ', i, '\tj:', j);
        j = N;
      }
    }
  }
  return out;
}

// ==============================================

// solution("aabbbcccdef", "xxyyzzz") -> "abcdefxyz"
console.log(solution('aabbbcccdef', 'xxyyzzz')); // "abcdefxyz"

// solution("abc", "abc") -> "abc"
console.log('abc', 'abc'); // "abc"
