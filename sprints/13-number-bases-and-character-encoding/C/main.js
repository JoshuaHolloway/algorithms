// -Given a number, write a function that
//  converts that number into a string that
//  contains "raindrop sounds" corresponding
//  to certain potential factors.
// -A factor is a number that evenly divides
//  into another number, leaving no remainder.
// -The simplest way to test if one number
//  is a factor of another is to use the
//  modulo operator.

// -Here are the rules for csRaindrop.
//  --If the input number:
//    ---has 3 as a factor, add "Pling" to the result.
//    ---has 5 as a factor, add "Plang" to the result.
//    ---has 7 as a factor, add "Plong" to the result.
//    ---does not have any of 3, 5, or 7 as a factor,
//       the result should be the digits of the input number.

// Examples:
// solution(28) -> "Plong"
// 28 has 7 as a factor, but not 3 or 5.
// solution(30) -> "PlingPlang"
// 30 has both 3 and 5 as factors, but not 7.
// solution(34) -> "34"
// 34 is not factored by 3, 5, or 7.

// ==============================================

const solution = (num) => {
  let out = '';
  const conditions = [];
  conditions.push(num % 3 === 0);
  conditions.push(num % 5 === 0);
  conditions.push(num % 7 === 0);
  if (conditions[0]) {
    out = out + 'Pling';
  }
  if (conditions[1]) {
    out = out + 'Plang';
  }
  if (conditions[2]) {
    out = out + 'Plong';
  }
  if (!conditions[0] && !conditions[1] && !conditions[2]) {
    return num.toString();
  }
  return out;
};

// ==============================================

// solution(28) -> "Plong"
// 28 has 7 as a factor, but not 3 or 5.
console.log(solution(28));

// solution(30) -> "PlingPlang"
// 30 has both 3 and 5 as factors, but not 7.
console.log(solution(30));

// solution(34) -> "34"
// 34 is not factored by 3, 5, or 7.
console.log(solution(34));
