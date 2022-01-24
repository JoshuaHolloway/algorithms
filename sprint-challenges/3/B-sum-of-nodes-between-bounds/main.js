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
    this.v = v;
    this.r = null;
    this.l = null;
  }

  // --------------------------------------------

  add(v) {
    if (this.v === null) {
      this.v = v;
      return;
    }

    // -Add to the right node
    if (this.v < v) {
      if (this.r) {
        this.r.add(v);
        return;
      }

      // -leaf node
      this.r = new Node(v);
      return;
    }

    // -Add to the left node
    if (this.v > v) {
      if (this.l) {
        this.l.add(v);
        return;
      }

      // -leaf node
      this.l = new Node(v);
      return;
    }
  }

  // --------------------------------------------
}

// ==============================================

const f = (node, min, max) => {
  let sum = 0;
  (function preorder(node) {
    if (node === null) return;

    if (min <= node.v && node.v <= max) sum += node.v;

    console.log(node.v);
    preorder(node.l);
    preorder(node.r);
  })(node);
  return sum;
};

// ==============================================

const root = new Node(1);
root.l = new Node(2);
root.r = new Node(3);
root.l.l = new Node(4);
root.l.r = new Node(5);

console.log(root);
console.log('sum of nodes between 2 and 4: ', f(root, 2, 4));

const r2 = new Node(10);
r2.add(5);
r2.add(15);
r2.add(3);
r2.add(7);
r2.add(18);
console.log('sum of nodes between 7 and 15: ', f(r2, 7, 15));

console.log(r2);

// ==============================================
