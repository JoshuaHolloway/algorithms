// Given a string of words, return the length of the shortest word(s).

// Notes:
// The input string will never be empty
// and you do NOT need to validate for different data types.

// ==============================================

const solution = (str) => {
  const arr = str.split(/[^A-Za-z]/); // split on ANY non alphabet character

  let min = 1e6,
    min_idx = 0;
  for (let i = 0; i < arr.length; ++i) {
    const word = arr[i].split('');
    let len = word.length;
    if (len < min && len > 0) {
      min = len;
      min_idx = i;
    }
  }
  return min;
};

// ==============================================

const x = solution('bob steve josh xu alen jessica');
console.log(x);

const y = solution('ZxuvWBoofsTUtasPIhsuCJjttHhBuuHZoxZk\tWZxAkjdCqDpML');
console.log(y);

// Expected Output: 3
const z = solution(
  'not great programmer; just good programmer with great habits.'
);
console.log(z);
