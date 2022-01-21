// Create a function that given an integer, returns an integer where every digit in the input integer is squared.

// Examples:

// solution(9119) -> 811181 because 9^2 = 81, 1^2 = 1, 1^2 = 1, and 9^2 = 81
// solution(2483) -> 416649 because 2^2 = 4, 4^2 = 16, 8^2 = 64, and 3^2 = 9

const f = (num) => {
  const arr = num.toString().split('');

  let out = [];
  for (let i = 0; i < arr.length; ++i) {
    out[i] = String(Number(arr[i]) ** 2);
  }
  return Number(out.join(''));
};

console.log(f(9119));
console.log(f(2483));
