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
    this.children.splice(index, 1); // remove the node for this index
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

console.log(dev_node.node.addNode('index.js'));
console.log(dev_node.node.addNode('styles.css'));
console.log(dev_node.node.addNode('index.html'));
console.log(file_system);

//               root
//                |
//               dev
//         /      |      \
// inddex.js  styles.css  index.html
