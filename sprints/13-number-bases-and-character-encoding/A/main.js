// Given an integer, write a function that reverses the bits (in binary) and returns the integer result.

// Examples:
// solution(417) -> 267
// 417 in binary is 110100001. Reversing the binary is 100001011, which is 267 in decimal.
// solution(267) -> 417
// solution(0) -> 0

// Notes:
// The input integer will not be negative.

// ==============================================

function dec2bin(dec) {
  const num_bits = Math.floor(Math.log2(dec));
  // console.log('num: ', dec, ', N: ', num_bits);

  let bits = [];
  let remainder = dec;
  for (let n = num_bits; n >= 0; --n) {
    if (remainder - 2 ** n >= 0) {
      remainder -= 2 ** n;
      // console.log('n: ', n, '\tremainder: ', remainder);
      bits.push(1);
    } else {
      bits.push(0);
    }
  }
  return reverse_array(bits);
}

// ==============================================

// -returns binary reversed decimal value
function binReverse2dec(bin) {
  bin = reverse_array(bin);
  const num_bits = bin.length;
  let dec = 0;
  for (let n = 0; n < num_bits; ++n) {
    dec += bin[n] * 2 ** n;
    if (bin[n] === 1) {
      // console.log('n: ', n, '\tbin[n]: ', bin[n], '\tdec: ', dec);
    }
  }
  return dec;
}

function bin2dec(bin) {
  const num_bits = bin.length;
  let dec = 0;
  for (let n = 0; n < num_bits; ++n) {
    dec += bin[n] * 2 ** n;
    if (bin[n] === 1) {
      // console.log('n: ', n, '\tbin[n]: ', bin[n], '\tdec: ', dec);
    }
  }
  return dec;
}

// ==============================================

const reverse_array = (arr) => {
  const N = arr.length;
  let out = [];
  for (let i = 0, j = N - 1; i < N; ++i, --j) {
    out[i] = arr[j];
  }
  return out;
};

// ==============================================

console.log(dec2bin(417));
console.log(bin2dec(dec2bin(417)));
console.log(binReverse2dec(dec2bin(417))); // 267

// solution(267) -> 417
console.log(dec2bin(267));
console.log(bin2dec(dec2bin(267)));
console.log(binReverse2dec(dec2bin(267))); // 417

// solution(0) -> 0
console.log(dec2bin(0));
console.log(bin2dec(dec2bin(0)));
console.log(binReverse2dec(dec2bin(0))); // 0
