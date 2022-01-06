// Given a list of different students' scores, write a function that returns the average of each student's top five scores.
//  -You should return the averages in ascending order of the students' id numbers.
//  -Each entry (scores[i]) has the student's id number (scores[i][0]) and the student's score (scores[i][1]).
//  -The averages should be calculated using integer division.

// Example 1:

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]

// Explanation:
// The average student `1` is `87`.
// The average of student `2` is `88.6`, but with integer division is `88`.

// Notes:
// The score of the students is between 1 and 100.
// [execution time limit] 4 seconds (js)

// [input] array.array.integer scores
// [output] array.array.integer

// ==============================================

// Josh problem solving Step 1: -Step through the provided example:

// input:
//  -scores = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
//
// index:
//  scores([0]) = [1,91]
//  scores([0][0]) = 1
//  scores([0][1]) = 91
//
// -Goal: find average of top five scores for EACH student:
//
//  (1) [1,100]     [2,100]
//  (2) [1,92]      [2,97]
//  (3) [1,91]      [2,93]
//  (4) [1,87]      [2,77]
//  (5) [1,65]      [2,76]
//      [1,60]

// Josh problem solving step 2:   -formulate a solution

// Step 1: Seperate the scores for each student.
//          --Store as Hash-Table:
//            ---key:     student ID
//            ---value:   score [array of numbers]
//          --Example:
//            students_hash_table: {
//                1: [100, 92, 91, 87, 65, 60],
//                2: [100, 97, 93, 77, 67]
//
//             };
// Step 2: Sort the scores of each student and keep only the top 5.
//          --Utlized the .sort() method on the key of the object (table[key].sort())
//          stuends_hash_table[1].sort((a, b) => a - b)

//  .sort(compareFunction(a,b)):
//      compareFunction(a, b) return value	    sort order
//        > 0	                                  sort b before a
//        < 0	                                  sort a before b
//        === 0	                                keep original order of a and b

// Step 3: Average the value of the top five values.

// Josh problem solving step 3:   -implement the solution

const f = (matrix) => {
  const NUM_ROWS = matrix.length;
  const NUM_COLS = matrix[0].length;

  const table = {};
  for (let i = 0; i < NUM_ROWS; ++i) {
    const student_id = matrix[i][0];
    if (table[student_id]) {
      table[student_id].push(matrix[i][1]); // pus the
    } else {
      table[student_id] = [matrix[i][1]];
    }
  }

  let ave_table = {};
  const out_matrix = [];
  for (let key in table) {
    table[key].sort((a, b) => b - a);

    let sum = 0;
    let count = 0;
    for (let [arr_idx, array_elem_val] of table[key].entries()) {
      if (arr_idx < 5) {
        sum += array_elem_val;
        count++;
      }
    }
    const ave = Math.floor(sum / count);
    ave_table[key] = ave;
    out_matrix.push([Number(key), ave_table[key]]);
  }

  return out_matrix;
};

// ==============================================

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
console.log(
  f([
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
  ])
);

// Input:   [[1,2]]
// Output:  [[1,2]]
console.log(f([[1, 2]]));
