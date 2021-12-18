import LinkedList from '../D-linked-list/main.js';

// ==============================================

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(val) {
    this.list.prepend(val);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return this.list.head; // head === null => zero-elements
  }

  toArray() {
    return this.list.toArray();
  }
}

// ==============================================

const stack = new Stack();
stack.push('cook food');
stack.push('clean dishes');
stack.push('buy ingredients');

console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.toArray());

console.log(stack.pop());

// ==============================================

//                  Stacks              Arrays
//                  ------              ------
// Element Access   O(1)                O(1)
//                  -Limited to
//                   top-element
// Insertion at End O(1)                O(1)
//
// Insertion at     O(n)                O(n)          Linked-List has advantage here
// Beginning        with data-loss
//
// Insertion        O(n)                O(n)
// in middle        with data-loss
//
// Search Elements  O(n)                O(n)
//                  with data-loss
//                  ------------------------
//                  -Stack's only advantage is
//                   if you want to ensure that
//                   only push/pop is used.
//                  -Therefore, it is not
//                   a performance optimization.
//                  -It is a 'use-case' optimization.
