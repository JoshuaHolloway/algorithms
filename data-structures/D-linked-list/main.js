// Linked Lists

// ==============================================

export default class LinkedList {
  // --------------------------------------------

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // --------------------------------------------

  append(value) {
    const newNode = { value: value, next: null };

    // -if list is empty, then don't update the tail.
    // -only update the old tail if we have one.
    if (this.tail) {
      this.tail.next = newNode; // update old tails next property
    }
    this.tail = newNode; // replace the tail with the new node

    // -if head is falsey then set the head to newNode
    if (!this.head) {
      this.head = newNode;
    }
  }

  // --------------------------------------------

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  // --------------------------------------------

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    while (currNode.next) {
      if (currNode.next.value === value) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    // -if last node needs to be deleted, update tail
    if (this.tail.value === value) {
      this.tail = currNode; // previous because the while loop was never entered because .next is null on tail
    }
  }

  // --------------------------------------------

  deleteHead() {
    if (!this.head) {
      // list is empty
      return null;
    }

    const deletedItem = this.head;
    if (this.head.next) {
      // -If head.next !== null
      // b(there is more than one element in the list)
      this.head = this.head.next;
    } else {
      // -Head is the only element
      this.head = null;
    }
    return deletedItem;
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

// const ll = new LinkedList();

// ll.append(5);
// ll.append(7);
// ll.append(4);
// console.log(ll.toArray());

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

// -Historically, the main reason linked-lists were used was for memory-management.
//  --You didn't have to specify (occupy) the size in advance.
// -Nowdays, JS has dynamic arrays (dynamic re-sizing built-in)
//  and memory isn't ready the primary issue in JS-apps.
// -Linked Lists can be useful if you do a lot of insertions at the beginning
//  of lists - linked lists are faster than arrays at this.
