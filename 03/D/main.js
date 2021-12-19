// Given a string, write a function that returns the index of the first unique (non-repeating) character. If there isn't a unique (non-repeating) character, return -1.

// Examples:
// solution(input_str = "lambdaschool") -> 2
// solution(input_str = "ilovelambdaschool") -> 0
// solution(input_str = "vvv") -> -1

// Notes:
// input_str will only contain lowercase alpha characters.

// ==============================================

function solution(str) {
  // Step 1: Loop over the elements and place the elements in a hash table with keys as the chars.
  //          -Each value is an array used for collision resolution via chaining.
  // Step 2: Loop over the elements in the hash-map, and for elements that have lenth-1 (unique)
  //         find the lowest index value.
  let map = {};
  let count = 0;
  for (char of str) {
    if (map[char]) {
      map[char].push({ val: char, idx: count });
    } else {
      map[char] = [{ val: char, idx: count }];
    }
    ++count;
  }

  const buckets = Object.values(map);

  const unique_buckets = buckets.filter((bucket) => bucket.length === 1);
  if (unique_buckets.length > 0) {
    const idxs = unique_buckets.map((arr) => arr[0].idx);
    const min_idx = Math.min(...idxs);
    return min_idx >= 0 ? min_idx : -1;
  } else {
    return -1;
  }
}

// ==============================================

// solution(input_str = "lambdaschool") -> 2
console.log(solution('lambdaschool'));

// solution(input_str = "ilovelambdaschool") -> 0
console.log(solution('ilovelambdaschool'));

// solution(input_str = "vvv") -> -1
console.log(solution('vvv'));
