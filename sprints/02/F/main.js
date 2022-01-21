// -Create a function that concatenates the number 7 to the end of every chord in a list.
// -If a chord already ends with a 7, do not add another 7.

// Examples:
// solution(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// solution(["G", "F7", "C"]) ➞ ["G7", "F7", "C7"]
// solution(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// solution(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// solution([]) ➞ []

// ==============================================

const solution = (arr) => {
  const N = arr.length;
  for (let i = 0; i < N; ++i) {
    const last_char = arr[i].slice(-1);
    if (last_char !== '7') {
      arr[i] = `${arr[i]}7`;
    }
  }
  return arr;
};

// ==============================================

// solution(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
console.log(solution(['G', 'F', 'C']));

// solution(["G", "F7", "C"]) ➞ ["G7", "F7", "C7"]
console.log(solution(['G', 'F7', 'C']));

// solution(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
console.log(solution(['Dm', 'G', 'E', 'A']));

// solution(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(solution(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']));

// solution([]) ➞ []
console.log([]);
