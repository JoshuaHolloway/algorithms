// Given a string text, you need to use the characters of text to form as many instances of the word "lambda" as possible.
//
// You can use each character in text at most once.
//
// Write a function that returns the maximum number of instances of "lambda" that can be formed.
//
// Example 1:
//  -Input:   text = "mbxcdatlas"
//  -Output:  1
//
// Example 2:
//  -Input:   text = "lalaaxcmbdtsumbdav"
//  -Output:  2
//
// Example 3:
//  -Input: text = "sctlamb"
//  -Output: 0
//
// Notes:
//  -text consists of lowercase English characters only
//
// [execution time limit] 4 seconds (js)
//
// [input]  string text
// [output] integer

// ==============================================

// Josh problem solving Step 1:   -Step through the provided example:
//
// Example 1:
// Input: text = "mbxcdatlas"
// lambda(xcts)
// Output: 1
//
// Example 2:
// Input: text = "lalaaxcmbdtsumbdav"
// lambda(axcltsumbdav)
// lambda(laaxcmbdtsuv)
// Output: 2
//
// Example 3:
// Input: text = "sctlamb"
// Output: 0
//
// Josh problem solving step 2:   -formulate a solution. try to create a functional approach where each step is a function taking the output of the previous step as the input to the current step.
// Step 1:  step_1_output = f1(input)
// Step 2:  step_2_output = f2(step_1_output)
// ...
// Step N:  step_N_output = fN(step_N-1_output)
//
// Josh problem solving step 3:   -implement the solution

// ==============================================

const f1 = (input) => {
  // -Count the number of each character
  // -Input: string
  // -Output: Hash Table where keys are the letter and values are the number of times that character occured in the string.
  let table = {};
  for (let char of input) {
    if (table[char]) {
      ++table[char];
    } else {
      table[char] = 1;
    }
  }
  return table;
};

// ==============================================

const f2 = (table) => {
  // -Count number of times ALL the letters {'l', 'a' (x2), 'm', 'b', 'd'} occur in the hash table

  let count = 0;

  while (true) {
    if (
      table['l'] &&
      table['a'] &&
      table['m'] &&
      table['b'] &&
      table['d'] &&
      table['a']
    ) {
      for (let key in table) {
        table[key]--;
      }
      ++count;
    } else return count;
  }
};

// ==============================================

// Do tests:

// Example 1:
//  -Input:   text = "mbxcdatlas"
//  -Output:  1
console.log(f2(f1('mbxcdatlas')));

// Example 2:
//  -Input:   text = "lalaaxcmbdtsumbdav"
//  -Output:  2
console.log(f2(f1('lalaaxcmbdtsumbdav')));

// Example 3:
//  -Input: text = "sctlamb"
//  -Output: 0
console.log(f2(f1('sctlamb')));
