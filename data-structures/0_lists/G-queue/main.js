// import LinkedList from '../D-linked-list/main.js';

// ==============================================

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.unshift(val);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return [...this.items]; // this.items.slice();
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
