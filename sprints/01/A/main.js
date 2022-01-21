// Create a function that returns True if the given string has any of the following:

// (criteria 1): Only letters and no numbers.
// (criteria 2): Only numbers and no letters.

// If a string has both numbers and letters or contains characters that don't fit into any category, return False.

// Examples:

// solution("Bold") ➞ True
// solution("123454321") ➞ True
// solution("H3LL0") ➞ False

// Notes:

// Any string that contains spaces or is empty should return False.
// [execution time limit] 4 seconds (js)

// [input] string input_str

// [output] boolean

// ==============================================

function solution(STR) {
  const f = (str) => {
    // (criteria 1)
    // -Returns true if string contains only letters and no numbers.

    const char_arr = str.split('');

    // console.log('typeof char_arr[0]: ', typeof char_arr[0]);

    for (let i = 0; i < char_arr.length; ++i) {
      // console.log('isNaN(char): ', isNaN(char_arr[i]));
      if (!isNaN(char_arr[i])) {
        // NOTE: This will not work with a
        //       .forEach loop!
        return false;
      }
    }
    return true;
  };

  // --------------------------------------------

  const g = (str) => {
    // (criteria 1)
    // -Returns true if string contains only numbers and no letters.

    const char_arr = str.split('');

    // console.log('typeof char_arr[0]: ', typeof char_arr[0]);

    for (let i = 0; i < char_arr.length; ++i) {
      // console.log('isNaN(char): ', isNaN(char_arr[i]));
      if (isNaN(char_arr[i])) {
        // NOTE: This will not work with a
        //       .forEach loop!
        return false;
      }
    }

    return true;
  };

  // --------------------------------------------

  const h = (str) => {
    // -Return false if the string contains characters that are neither letters nor numbers
    //  (e.g. ], *, @, etc.)
    const regex = /[a-zA-Z0-9]/g;
    const found = str.match(regex);

    let does_contain_alphaNumeric = true;
    if (found === null) {
      does_contain_alphaNumeric = false;
    }

    let does_contain_non_alphaNumeric = false;
    if (found === null || found?.length < str?.length) {
      does_contain_non_alphaNumeric = true;
    }

    // console.log(found);
    // console.log('does_contain_alphaNumeric: ', does_contain_alphaNumeric);
    // console.log(
    //   'does_contain_non_alphaNumeric: ',
    //   does_contain_non_alphaNumeric
    // );
    return does_contain_non_alphaNumeric;
  };

  // --------------------------------------------

  // -Combine both (criteria 1) and (criteria 2).
  return (f(STR) || g(STR)) && !h(STR);
}

// ==============================================

// solution("Bold") ➞ True
// solution("123454321") ➞ True
// solution("H3LL0") ➞ False
let str1 = 'Bold';
let str2 = '123454321';
let str3 = 'H3LL0';
let str4 = 'oxXqWf-{$-';
console.log('test 1: ', solution(str1));
console.log('test 2: ', solution(str2));
console.log('test 3: ', solution(str3));
console.log('test 4: ', solution(str4));
