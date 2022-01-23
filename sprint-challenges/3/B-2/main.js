// -You are given the root node of a binary search tree (BST).

// -You need to write a function that returns the sum of values
//  of all the nodes with a value between lower and upper (inclusive).

// -The BST is guaranteed to have unique values.

// Example 1:
// Input:
//  root = [10, 5, 15, 3, 7, null, 18]
//  lower = 7
//  upper = 15
//
//           10
//          / \
//         5  15
//       / \    \
//      3   7    18

// Output:
// 32

// Example 2:
// Input:
//  root = [10,5,15,3,7,13,18,1,null,6]
//  lower = 6
//  upper = 10

//            10
//          /    \
//        5       15
//      / \     /   \
//     3   7  13   18
//   /   /
//  1   6

// Output:
// 23

// [execution time limit] 4 seconds (js)

// [input] tree.integer root

// [input] integer lower

// [input] integer upper

// [output] integer

// -Follow up questions:
//  --Explain the time and space complexity of your solution.
//  --Is your solution optimal?
//  --If not, how could you imporove the time/space-complexity of your solution?

// Trees

// ==============================================

class Node {
  // --------------------------------------------

  constructor(v) {
    this.value = v;
    this.right = null;
    this.left = null;
  }

  // --------------------------------------------

  add(v) {
    if (this.value === null) {
      this.value = v;
      return;
    }

    // -Add to the right node
    if (this.value < v) {
      if (this.right) {
        this.right.add(v);
        return;
      }

      // -leaf node
      this.right = new Node(v);
      return;
    }

    // -Add to the left node
    if (this.value > v) {
      if (this.left) {
        this.left.add(v);
        return;
      }

      // -leaf node
      this.left = new Node(v);
      return;
    }
  }

  // --------------------------------------------
}

// ==============================================

const f = (node, min, max) => {
  let sum = 0;
  (function preorder(node) {
    if (node === null) {
      return;
    }

    if (min <= node.value && node.value <= max) {
      sum += node.value;
    }

    preorder(node.left);
    preorder(node.right);
  })(node);
  return sum;
};

// ==============================================
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function solution(root, lower, upper) {}
const solution = f;

// ==============================================

const root = new Node(10);
root.add(5);
root.add(15);
root.add(3);
root.add(7);
root.add(18);
console.log('sum of nodes between 7 and 15: ', solution(root, 7, 15));

console.log(root);

// ==============================================
