// Given a string, return a new string with all the vowels removed.

// Examples:
// f("Lambda!") -> "Lmbd!"

// "y" is not considered a vowel.

const f = (str) => {
  return str.replaceAll(/[aeiou]/gi, '');
};

console.log(f('Lambda School is awesome!'));
