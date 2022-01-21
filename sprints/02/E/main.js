// Given an array of integers, return the sum of all the positive integers in the array.

// Examples:
// solution([1, 2, 3, -4, 5]) -> 1 + 2 + 3 + 5 = 11
// solution([-3, -2, -1, 0, 1]) -> 1
// solution([-3, -2]) -> 0

// ==============================================

const solution = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

// ==============================================

// solution([1, 2, 3, -4, 5]) -> 1 + 2 + 3 + 5 = 11
console.log(solution([1, 2, 3, -4, 5]));

// solution([-3, -2, -1, 0, 1]) -> 1
console.log(solution([-3, -2, -1, 0, 1]));

// solution([-3, -2]) -> 0
console.log(solution([-3, -2]));
