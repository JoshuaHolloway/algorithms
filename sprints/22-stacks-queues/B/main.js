// -Given a string sequence consisting of the characters '(', ')', '[', ']', '{', and '}'.
// -Your task is to determine whether or not the sequence is a valid bracket sequence.

// The Valid bracket sequence is defined in the following way:
//  -An empty bracket sequence is a valid bracket sequence.
//  -If S is a valid bracket sequence then (S), [S] and {S} are also valid.
//  -If A and B are valid bracket sequences then AB is also valid.

// Example
//  -For sequence = "()", the output should be solution(sequence) = true;
//  -For sequence = "()[]{}", the output should be solution(sequence) = true;
//  -For sequence = "(]", the output should be solution(sequence) = false;
//  -For sequence = "([)]", the output should be solution(sequence) = false;
//  -For sequence = "{[]}", the output should be solution(sequence) = true.

// Input/Output
//  -[execution time limit] 4 seconds (js)

// [input] string sequence
//  -A bracket sequence, consisting of the characters (, ), [, ], {, and }.

// Guaranteed constraints:
//  -0 ≤ sequence.length ≤ 106.

// [output] boolean
//  -true if sequence is a valid bracket sequence and false otherwise.

// ==============================================

// Step 1: Step through example
//  input = ()[]{};
//
//    push( ; )
//    push( } )     ;

// Step 2: Stategize a solution
// Step 3: Implement shit

// ==============================================
