// -Given a start integer and an ending integer (both inclusive),
//  write a function that returns the count (not the sum)
//  of all integers in the range
//  (except integers that contain the digit 5).

// Examples:
// solution(1, 5) -> 1, 2, 3, 4, -> 4 (there are 4 integers in the range that do not contain the digit 5)
// solution(1, 9) -> 1, 2, 3, 4, 6, 7, 8, 9 -> 8
// solution(4, 17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> 12

// NOTE: My implementation did not completely work.
// -There were several hidden tests that failed.
// -ALL sample tests passed though!?!?!

// ==============================================

const solution = (lo, hi) => {
  const is_odd = (n) => n % 2 !== 0;

  let count = 0;
  for (let i = lo; i <= hi; ++i) {
    if (!(i % 5 === 0 && is_odd(Math.floor(i / 5))) && (i < 50 || 60 <= i)) {
      // if (i % 5 === 0) {
      count++;
    }
  }
  return count;
};

// ==============================================

// solution(1, 5) -> 1, 2, 3, 4, -> 4 (there are 4 integers in the range that do not contain the digit 5)
console.log(solution(1, 5)); // 4

// solution(1, 9) -> 1, 2, 3, 4, 6, 7, 8, 9 -> 8
console.log(solution(1, 9)); // 8

// solution(4, 17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> 12
console.log(solution(4, 17)); // 12

// [1, 20] // 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19 ,20
console.log(solution(1, 20)); // 18

console.log(solution(1, 90)); // 72
