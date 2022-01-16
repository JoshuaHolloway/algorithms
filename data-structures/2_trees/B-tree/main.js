// Trees

// ==============================================

class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;

    // new implicitly returns this
  }

  // --------------------------------------------

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

  // --------------------------------------------

  removeNode(value) {
    console.log('value: ', value.split('/'));

    const segments = value.split('/');

    if (segments.length === 0) {
      return;
    } else if (segments.length === 1) {
      // -search children for value
      const existingNodeIndex = this.children.findIndex(
        (child) => (child.vaue = value)
      );

      // -.findIndex() returns -1 if not found
      if (existingNodeIndex < 0) {
        throw new Error('Could not find matching value!');
      } else {
        // -Node found.
        // -Splice that bitch.
        this.children.splice(existingNodeIndex, 1); // mutate
      }
    } else if (segments.length > 1) {
      // -Search children for left-most string in segments: string[]
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      // .find() returns undefined if not found
      if (!existingChildNode) {
        throw new Error(
          'Could not find matching path! Path segment: ',
          segments[0]
        );
      }

      // -Found node
      // -Recursively call current method.
      // -Pass in the segments: string[] = [ segments[1], ..., segments[N-1] ]
      existingChildNode.removeNode(segments.slice(1).join('/'));
    }
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

  remove(path) {
    this.root.removeNode(path);
  }
}

// ==============================================

const file_system = new Tree('/');
file_system.add('x/y/z.txt');
file_system.add('x/y2/cod.exe');
file_system.remove('x/y/z.txt');

console.log(file_system);
