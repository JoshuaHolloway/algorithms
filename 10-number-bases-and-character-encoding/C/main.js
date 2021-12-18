// Given a binary string (ASCII encoded), write a function that returns the equivalent decoded text.

// Every eight bits in the binary string represents one character on the ASCII table.

// Examples:
// solution("011011000110000101101101011000100110010001100001") -> "lambda"
// 01101100 -> 108 -> "l"
// 01100001 -> 97 -> "a"
// 01101101 -> 109 -> "m"
// 01100010 -> 98 -> "b"
// 01100100 -> 100 -> "d"
// 01100001 -> 97 -> "a"
// solution("") -> ""

// Notes:
// The input string will always be a valid binary string.
// Characters can be in the range from "00000000" to "11111111" (inclusive).
// In the case of an empty input string, your function should return an empty string.

// ==============================================

const solution = (bin) => {
  let arr = bin.split('');
  // arr = reverseArray(arr);
  console.log(arr);

  let matrix = new Array(Math.ceil(arr.length / 8));
  for (let i = 0; i < matrix.length; ++i) {
    matrix[i] = new Array(8);
  }

  let count = 0;
  for (let i = 0; i < arr.length / 8; ++i) {
    for (let j = 7; j >= 0; --j) {
      // read in each 8-bits in reversed order
      matrix[i][j] = Number(arr[count++]);
    }
  }
  console.log(matrix);

  let out = [];
  for (let i = 0; i < matrix.length; ++i) {
    let sum = 0;
    for (let j = 0; j < 8; ++j) {
      let bit = matrix[i][j];
      sum += bit * 2 ** j;
    }
    const ascii = String.fromCharCode(sum);
    out.push(ascii);
  }
  return out.join('');
};

// solution("011011000110000101101101011000100110010001100001") -> "lambda"
const x = solution('011011000110000101101101011000100110010001100001');
console.log(x);
