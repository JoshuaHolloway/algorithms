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

    // -Add to the right node
    if (this.value < value) {
      if (this.right) {
        this.right.add(value);
        return;
      }

      // -Only do this if we are at the leaf node
      const newNode = new Node(value);
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
      const newNode = new Node(value);
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
}

// ==============================================

const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(20);
tree.add(25);
tree.add(39);
// tree.remove(39);
console.log(tree);
console.log('6: ', tree.find(6));
console.log('7: ', tree.find(7));
console.log('39: ', tree.find(39));

console.log('20: ', tree.find(20));
