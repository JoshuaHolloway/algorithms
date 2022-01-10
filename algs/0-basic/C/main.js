// Factorial Algorithm (Loop) - Space Complexity

// ==============================================

function fact(num) {
  let result = 1;
  for (let i = 2; i < num; ++i) {
    result = result * i;
  }
  return result;
}

// ==============================================

// 1   1*2  1*2*3   1*2*3*4
// 1    2   6       24      ...

// O(1) Space-Complexity
//  -Because the result is updated in-place
