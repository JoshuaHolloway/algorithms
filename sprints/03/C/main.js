// -You are given two strings, str_1 and str_2,
//  where str_2 is generated by randomly shuffling str_1 and then adding one letter at a random position.

// Write a function that returns the letter that was added to str_2.

// Examples:
// solution(str_1 = "bcde", str_2 = "bdcef") -> "f"
// solution(str_1 = "", str_2 = "z") -> "z"
// solution(str_1 = "b", str_2 = "bb") -> "b"
// solution(str_1 = "bf", str_2 = "bfb") -> "b"

// Notes:
// str_1 and str_2 both consist of only lowercase alpha characters.

const createHashMap = (str) => {
  let m = {};
  for (char of str) {
    if (m[char]?.length > 0) {
      // console.log('char: ', char, '\tm[char]: ', m[char]);
      m[char].push(char);
    } else {
      m[char] = [char];
    }
  }
  return m;
};

// ==============================================

function solution(str_1, str_2) {
  // Step 1: Create hash map with chaining to count number of occurences of each character (for both input strings)
  const map1 = createHashMap(str_1);
  const map2 = createHashMap(str_2);

  // Step 2: Compare the two hash-maps to determine which character has been added

  // -map2 is longer by 1
  let diff = '';
  for (char in map2) {
    if (map1[char]) {
      if (map2[char].length > map1[char].length) {
        diff = char;
        break;
      }
    } else {
      diff = char;
      break;
    }
  }
  return diff;
}

// ==============================================

// solution(str_1 = "bcde", str_2 = "bdcef") -> "f"
console.log(solution('bcde', 'bdcef'));

// solution(str_1 = "", str_2 = "z") -> "z"
console.log(solution('', 'z'));

// solution(str_1 = "b", str_2 = "bb") -> "b"
console.log(solution('b', 'bb'));

// solution(str_1 = "bf", str_2 = "bfb") -> "b"
console.log(solution('bf', 'bfb'));

// solution(str_1: "xqmxtheyvpdqounqmfyaqdqxwe", str_2: "ounxtheyqxqmvpdqmfyaqxdqxwe") -> x
console.log(
  solution('xqmxtheyvpdqounqmfyaqdqxwe', 'ounxtheyqxqmvpdqmfyaqxdqxwe')
);