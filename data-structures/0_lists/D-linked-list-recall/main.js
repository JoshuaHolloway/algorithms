// Linked Lists

// ==============================================

class LinkedList {
  // --------------------------------------------

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // --------------------------------------------

  append(value) {
    // Step 0: Create new node
    const newNode = { value, next: null };

    // Step 1: If no tail-create tail
    if (this.tail) {
      this.tail.next = newNode;
    }

    // Step 2: Set tail.next of previous node to newNode
    this.tail = newNode;

    // Step 3: If no head-set head to newNode
    if (!this.head) {
      this.head = newNode;
    }
  }

  // --------------------------------------------

  prepend(value) {
    const newNode = { value, next: null };
    let prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
  }

  // --------------------------------------------

  delete(value) {
    // Step 0: If zero-length list, nothing to check
    if (!this.head) {
      return null;
    }

    // Step 1: Test for possible multiple nodes to delete at start of list
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    // Step 2: While currNode is not the tail, look at currNode.val.next to see if we want to move pointer to skip it in list.
    let currNode = this.head;
    while (currNode.next !== null) {
      // while not tail
      if (currNode.next.value === value) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    // Step 3: If tail needs to be deleted, then move pointer
    if (this.tail.value === value) {
      currNode.next = null;
      this.tail = currNode;
    }
  }

  // --------------------------------------------

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }

  // --------------------------------------------
}

// ==============================================

const ll = new LinkedList();

ll.append(5);
console.log(ll.toArray());
ll.append(0);
console.log(ll.toArray());
ll.append(4);
console.log(ll.toArray());

ll.prepend(0);
console.log(ll.toArray());

ll.delete(0);
console.log(ll.toArray());

// ll.delete(7);
// console.log(ll.toArray());

// ll.delete(7);
// console.log(ll.toArray());

// ll.delete(4);
// console.log(ll.toArray());

// ==============================================
