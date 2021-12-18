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

    // Step 1: if tail exists, then update the old tail
    //         (on all appends AFTER first)
    if (this.tail) {
      this.tail.next = newNode;
    }

    // Step 2: Update tail
    this.tail = newNode;

    // Step 3: If head is falsey, then set newNode to head
    //         (only on first append)
    if (!this.head) {
      this.head = newNode;
    }
  }

  // --------------------------------------------

  prepend(value) {}

  // --------------------------------------------

  delete(value) {}

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
ll.append(7);
console.log(ll.toArray());
ll.append(4);
console.log(ll.toArray());

// ll.prepend(0);
// console.log(ll.toArray());

// ll.delete(0);
// console.log(ll.toArray());

// ll.delete(7);
// console.log(ll.toArray());

// ll.delete(7);
// console.log(ll.toArray());

// ll.delete(4);
// console.log(ll.toArray());

// ==============================================
