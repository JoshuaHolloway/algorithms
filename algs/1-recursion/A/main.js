// Recursion Introduction

// ==============================================

const sumList = (arr) => {
  if (arr.length === 1) {
    // console.log('(last) arr[0]: ', arr[0]);
    return arr[0];
  } else {
    // console.log('(first) arr[0]: ', arr[0]);
    return arr[0] + sumList(arr.slice(1, arr.length));
    // -The slice() method returns a shallow copy
    //  of a portion of an array into a new array
    //  object selected from start to end
    //  (end not included) where start and end
    //  represent the index of items in that array.
    //  The original array will not be modified
    //  (shallow copy
    //    => not a reference but instead "by-value" copy
    //    => not "in-place"
    //    => does not mutate the array).
  }
};

// ==============================================

console.log('sumList([      3]): ', sumList([3])); //                            3 [if]
console.log('sumList([   2, 3]): ', sumList([2, 3])); //               2[else] + 3 [if]
console.log('sumList([1, 2, 3]): ', sumList([1, 2, 3])); // 1[else] + (2[else] + 3 [if]))
