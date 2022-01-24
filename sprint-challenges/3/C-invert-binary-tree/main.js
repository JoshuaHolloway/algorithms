// Given a binary tree, write a function that inverts the tree.

//Example:
// Input:
//      6
//    /   \
//   4     8
//  / \   / \
// 2   5 7   9

// Output:
//      6
//    /   \
//   8     4
//  / \   / \
// 9   7 5   2

// [execution time limit] 4 seconds (js)

// [input] tree.integer root

// [output] tree.integer

// -Follow up questions:
//  --Explain the time and space complexity of your solution.
//  --Is your solution optimal?
//  --If not, how could you imporove the time/space-complexity of your solution?

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

const clone = (x) => ({ ...x });

// ==============================================

function invert(node) {
  if (node === null) {
    return;
  }

  [node.left, node.right] = [node.right, node.left];

  invert(node.left);
  invert(node.right);

  return node;
}

// ==============================================
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function solution(root, lower, upper) {}
const solution = invert;

// ==============================================

const root = new Node(10);
root.add(5);
root.add(15);
root.add(3);
root.add(7);
root.add(18);
console.log('Original Tree: ', clone(root));
console.log('Inverted Tree: ', solution(root, 7, 15));

// ==============================================
