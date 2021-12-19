// Trees

// ==============================================

class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const newNode = new Node(value, this);
    this.children.push(newNode);
    return { node: newNode, index: this.children.length - 1 };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

// ==============================================

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

// ==============================================

const file_system = new Tree('/');
const dev_node = file_system.root.addNode('/dev');

dev_node.node.addNode('index.js');
dev_node.node.addNode('styles.css');
dev_node.node.addNode('index.html');
console.log(file_system);
