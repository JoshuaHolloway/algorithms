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

// Binary Search Tree

// ==============================================

class Node {
  // --------------------------------------------

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  // --------------------------------------------

  add(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }

    const newNode = new Node(value);

    // -Add to the right node
    if (this.value < value) {
      if (this.right) {
        this.right.add(value);
        return;
      }

      // -Only do this if we are at the leaf node
      // const newNode = new Node(value);
      newNode.parent = this;
      this.right = newNode;
      return;
    }

    // -Add to the left node
    if (this.value > value) {
      if (this.left) {
        this.left.add(value);
        return;
      }

      // -Only do this if we are at the leaf node
      // const newNode = new Node(value);
      newNode.parent = this;
      this.left = newNode;
      return;
    }
  }

  // --------------------------------------------

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.value < value && this.right) {
      return this.right.find(value);
    }

    if (this.value > value && this.left) {
      return this.left.find(value);
    }
  }

  // --------------------------------------------

  remove(value) {
    const identifiedNode = this.find(value);

    if (!identifiedNode) {
      throw new Error('Could not find node with that value');
    }

    if (!identifiedNode.left && !identifiedNode.right) {
      // -Leaf node.
      // -Removal is trivail.
      // -Go to parent and tell it that is should not longer
      //  point at this leaf node.
      const identifiedParent = identifiedNode.parent;
      identifiedParent.removeChild(identifiedNode);
    }
  }

  // --------------------------------------------

  removeChild(node) {
    if (this.left && this.left === node) {
      // 'remove' left child
      this.left = null;
      return;
    }
    if (this.right && this.right === node) {
      // 'remove' right child
      this.right = null;
      return;
    }
  }

  // --------------------------------------------

  swap() {
    const temp = { ...this.left };
    this.left = this.right;
    this.right = temp;
  }

  // --------------------------------------------
}

// ==============================================

class Tree {
  // --------------------------------------------

  constructor() {
    this.root = new Node(null);
  }

  // --------------------------------------------

  add(value) {
    this.root.add(value);
  }

  // --------------------------------------------

  remove(value) {
    this.root.remove(value);
  }

  // --------------------------------------------

  find(value) {
    return this.root.find(value);
  }

  // --------------------------------------------

  swap() {
    this.root.swap();
    // this.root.right.swap();
    this.root.left.swap();

    console.log('this.root.left: ', this.root.left);
    console.log('this.root.right: ', this.root.right);
  }
}

// ==============================================

const tree = new Tree();
tree.add(6);
tree.add(4);
tree.add(8);
tree.add(2);
tree.add(5);
tree.add(7);
tree.add(9);
tree.swap();
console.log(tree);
// console.log('20: ', tree.find(20));
