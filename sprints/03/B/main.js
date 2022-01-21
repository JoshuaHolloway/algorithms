// -Given a sorted array (in ascending order)
//  of integers and a target,
//  write a function that finds the
//  two integers that add up to the target.

// Examples:
// solution([3,8,12,16], 11) -> [0,1]
// solution([3,4,5], 8) -> [0,2]
// solution([0,1], 1) -> [0,1]

// Notes:
// Each input will have exactly one solution.
// You may not use the same element twice.

// ==============================================

function solution(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      // console.log('i: ', i, '\tj:', j, '\tarr[i] + arr[j]: ', arr[i] + arr[j]);

      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// ==============================================

// ([3,8,12,16], 11) -> [0,1]
console.log(solution([3, 8, 12, 16], 11));

// ([3,4,5], 8) -> [0,2]
console.log(solution([3, 4, 5], 8));

// ([0,1], 1) -> [0,1]
console.log(solution([0, 1], 1));
