// Codewriting

// Write a function that searches a list of names (unsorted) for the name "Bob" and returns the location in the list. If Bob is not in the array, return -1.

// Examples:
// solution(["Jimmy", "Layla", "Bob"]) ➞ 2
// solution(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
// solution(["Jimmy", "Layla", "James"]) ➞ -1

// Notes:
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

// ==============================================

function solution(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].match(/bob/gi)) return i;
  }
  return -1;
}

// ==============================================

// solution(["Jimmy", "Layla", "Bob"]) ➞ 2
console.log(solution(['Jimmy', 'Layla', 'Bob']));

// solution(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
console.log(solution(['Bob', 'Layla', 'Kaitlyn', 'Patricia']));

// solution(["Jimmy", "Layla", "James"]) ➞ -1
console.log(solution(['Jimmy', 'Layla', 'James']));
