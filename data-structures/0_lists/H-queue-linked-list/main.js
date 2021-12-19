import LinkedList from '../D-linked-list/main.js';

// ==============================================

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(val) {
    this.list.append(val);
  }

  dequeue() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray(); // this.items.slice();
  }
}

// ==============================================

const queue = new Queue();
queue.enqueue('josh'); // 1
queue.enqueue('steve'); // 2
queue.enqueue('jennifer'); // 3

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.toArray());

// ==============================================
// ==============================================

//                  Stacks              Arrays
//                  ------              ------
// Element Access   O(1)                O(1)
//                  -Limited to
//                   first-element
// Insertion at End O(n)                O(1)
//                  with data-loss
//
// Insertion at     O(1)                O(n)          key-difference
// Beginning        if implemented
//                  with linked-list
//
// Insertion        O(n)                O(n)
// in middle        with data-loss
//
// Search Elements  O(n)                O(n)
//                  with data-loss
//                  ------------------------
//                  -Queue's real advantage is
//                   if you want to restrict
//                   functionality to the
//                   operations of a queue.
//                  -It does technically have
//                   a more efficient complexity
//                   for inserting at the beginning
//                   (if implemented as a linked-list
//                    because linked-lists also have
//                    this advantage over arrays!)
