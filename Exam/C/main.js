// Given a string, write a function that removes all duplicate words from the input. The string that you return should only contain the first occurrence of each word in the string.

// Examples:
// `solution("alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta") -> "alpha bravo golf delta"
// `solution("my dog is my dog is super smart") -> "my dog is super smart"

// ==============================================

function solution(str) {
  const arr = str.split(' ');
  const copy = [...arr];

  // console.log('arr: ', arr);
  count = 0;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        copy[i] = null;

        break;
      }
    }
  }

  let out = [];
  for (let i = 0; i < arr.length; ++i) {
    if (copy[i]) {
      out.push(copy[i]);
    }
  }
  return out.join(' ');
}

// ==============================================

// `solution("alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta") -> "alpha bravo golf delta"
console.log(
  solution(
    'alpha bravo bravo golf golf golf delta alpha bravo bravo golf golf golf delta'
  )
);

// `solution("my dog is my dog is super smart") -> "my dog is super smart"
console.log(solution('my dog is my dog is super smart'));
