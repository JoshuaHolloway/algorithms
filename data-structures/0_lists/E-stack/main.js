// Stack

// ==============================================

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return [...this.stack];
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
