// Trees

// ==============================================

class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;

    // new implicitly returns this
  }

  addNode(value) {
    const segments = value.split('/');
    // /x/y/z.txt
    //  [0]:  ""
    //  [1]:  "x"
    //  [2]:  "y"
    //  [3]:  "z.txt"

    if (segments.length === 0) {
      // -No /'s => not a path
      return;
    }
    if (segments.length === 1) {
      // /x.t
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }

    // -Else:
    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    ); // existingChildNode: {children: [{},...{}], value: number, parrent: {}}

    if (existingChildNode) {
      // -Node found (/x directory exists)
      // -.slice(start): [0,1,2].slice(1) => [1,2]
      existingChildNode.addNode(segments.slice(1).join('/')); // documents
      // existingChildNode: {children: [{value: 'x/y/z.txt', ...},...{}], value: number, parrent: {}}
    } else {
      // -Did not find node (/x does not exist)
      // -Create node
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join('/'));
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }
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

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {}
}

// ==============================================

const file_system = new Tree('/');
file_system.add('x/y/z.txt');
console.log(file_system);
