// In a city-state of n people, there is a rumor going around that one of the n people is a spy for the neighboring city-state.

// The spy, if it exists:

// Does not trust anyone else.
// Is trusted by everyone else (he's good at his job).
// Works alone; there are no other spies in the city-state.
// You are given a list of pairs, trust. Each trust[i] = [a, b] represents the fact that person a trusts person b.

// If the spy exists and can be found, return their identifier. Otherwise, return -1.

// Example 1:
// Input: n = 2, trust = [[1, 2]]
// Output: 2
// Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.

// Example 2:
// Input: n = 3, trust = [[1, 3], [2, 3]]
// Output: 3
// Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.

// Example 3:
// Input: n = 3, trust = [[1, 3], [2, 3], [3, 1]]
// Output: -1
// Explanation: Person 1 trusts Person 3, Person 2 trusts Person 3, and Person 3 trusts Person 1. Since everyone trusts at least one other person, there is no spy.

// Example 4:
// Input: n = 3, trust = [[1, 2], [2, 3]]
// Output: -1
// Explanation: Person 1 trusts Person 2, and Person 2 trusts Person 3. However, in this situation, we don't have any one person who is trusted by everyone else. So we can't determine who the spy is in this case.

// Example 5:
// Input: n = 4, trust = [[1, 3],[1, 4],[2, 3],[2, 4],[4, 3]]
// Output: 3

// Explanation: Person 1 trusts Person 3 and Person 4, Person 2 trusts Person 3 and Person 4, Person 4 trusts Person 3. Everyone trusts Person 3 but Person 3 does not trust anyone, so they are the spy.
// [execution time limit] 4 seconds (js)

// [input] integer n
// The number of people in the city-state

// [input] array.array.integer trust
// Array of pairs indicating who each person in trusts.

// [output] integer
// The identifier of the spy.

// ==============================================

function solution(n, trust) {
  const matrix = trust;
  const N = n;

  for (let i = 1; i <= N; ++i) {
    let count_0 = 0;
    let count_1 = 0;
    for (let row of matrix) {
      if (row[0] === i) count_0++;
      if (row[1] === i) count_1++;
    }
    // console.log('count_0: ', count_0, '\tcount_1: ', count_1);
    if (count_0 === 0 && count_1 === N - 1) return i;
  }
  return -1;
}

// ==============================================

// Example 1:
// Input: n = 2, trust = [[1, 2]]
// Output: 2
// Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.
console.log(solution(2, [[1, 2]]));

// Example 2:
// Input: n = 3, trust = [[1, 3], [2, 3]]
// Output: 3
// Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.
console.log(
  solution(3, [
    [1, 3],
    [2, 3],
  ])
);

// Example 3:
// Input: n = 3, trust = [[1, 3], [2, 3], [3, 1]]
// Output: -1
// Explanation: Person 1 trusts Person 3, Person 2 trusts Person 3, and Person 3 trusts Person 1. Since everyone trusts at least one other person, there is no spy.
console.log(
  solution(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);

// Example 4:
// Input: n = 3, trust = [[1, 2], [2, 3]]
// Output: -1
// Explanation: Person 1 trusts Person 2, and Person 2 trusts Person 3. However, in this situation, we don't have any one person who is trusted by everyone else. So we can't determine who the spy is in this case.
console.log(
  solution(3, [
    [1, 2],
    [2, 3],
  ])
);

// Example 5:
// Input: n = 4, trust = [[1, 3],[1, 4],[2, 3],[2, 4],[4, 3]]
// Output: 3
console.log(
  solution(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
