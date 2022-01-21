// Linked Lists

// ==============================================

export default class LinkedList {
  // --------------------------------------------

  constructor(ll1, ll2) {
    if (!ll1 && !ll2) {
      this.head = null;
      this.tail = null;
    } else {
      // let n1 = ll1.head;
      // let n2 = ll2.head;
      // // while (n1 && n2) {
      // // }
      // // -Iteration 1:
      // if (n1.value <= n2.value) {
      // }
    }
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

  // -Did not test .find()
  // find(value) {
  //   if (!this.head) {
  //     // list is empty
  //     return null;
  //   }
  //
  //   let currNode = this.head;
  //
  //   while (currNode) {
  //     if ((curNode.value = value)) {
  //       return currNode;
  //     }
  //     currNode = currNode.next;
  //   }
  //
  //   // -Did not find value in node
  //   return null;
  // }

  // --------------------------------------------

  insertBelowNextLargest(value) {
    if (!this.head) {
      // list is empty
      return null;
    }

    let currNode = this.head;

    // (1) Should insert at beginning?
    if (currNode.value >= value) {
      // -Replace head with this new nodes
      const newNode = { value, next: currNode };
      this.head = newNode;
      return newNode;
    }

    // (2) Should insert in the middle?
    while (currNode.next) {
      if (currNode.next.value > value) {
        // TODO: Insert the value here
        // -Step 1: Point new node to next node
        const newNode = { value, next: currNode.next };

        // -Step 2: Point the current node at the new Node
        currNode.next = newNode;
        return;
      } else {
        currNode = currNode.next;
      }
    }

    // (3) If made it here, then insert at the end
    const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
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

const merge = (ll1, ll2) => {
  const ll_out = new LinkedList();

  let n1 = ll1.head;
  let n2 = ll2.head;

  // while (n1 && n2) {

  let currNode = ll_out.head;

  // -Itteration 1
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    // currNode = newNode;
    ll_out.head = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    // currNode = newNode;
    ll_out.head = newNode;
    n2 = n2.next;
  }

  // currNode = currNode.next;

  // -Itteration 2
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next = newNode;
    n2 = n2.next;
  }

  // -Itteration 3
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next.next = newNode;
    n2 = n2.next;
  }

  // -Itteration 4
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next.next.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next.next.next = newNode;
    n2 = n2.next;
  }

  // -Itteration 5
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next.next.next.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next.next.next.next = newNode;
    n2 = n2.next;
  }

  // -Itteration 6
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next.next.next.next.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next.next.next.next.next = newNode;
    n2 = n2.next;
  }

  // -Itteration 7 (exhasted list)
  if (n1.value <= n2.value) {
    const newNode = { value: n1.value, next: null };
    ll_out.head.next.next.next.next.next.next = newNode;
    n1 = n1.next;
  } else {
    const newNode = { value: n2.value, next: null };
    ll_out.head.next.next.next.next.next.next = newNode;
    n2 = n2.next;
  }

  // } // while (n1 && n2)
  return ll_out;
};

// ==============================================

const ll_1 = new LinkedList();
const ll_2 = new LinkedList();

// [1, 3, 5, 10, 15]
ll_1.append(1);
ll_1.append(3);
ll_1.append(5);
ll_1.append(10);
ll_1.append(15);

// [-1, 2, 3, 4]
ll_2.append(-1);
ll_2.append(2);
ll_2.append(3);
ll_2.append(4);

// [-1, 1, 2, 3, 3, 4, 10, 15] = f([1, 3, 5, 10, 15], [-1, 2, 3, 4])
const ll_3 = merge(ll_1, ll_2);
console.log(ll_3.toArray());

// Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.
// Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

// Example
// 1. For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
//    f(l1, l2) = [1, 2, 3, 4, 5, 6];
//
// 2. For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
//    f(l1, l2) = [0, 1, 1, 2, 3, 4, 5].

// Input/Output
// [execution time limit] 4 seconds (js)
// [input] linkedlist.integer l1

// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 104,
// -109 ≤ element value ≤ 109.

// [input] linkedlist.integer l2
// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 104,
// -109 ≤ element value ≤ 109.

// [output] linkedlist.integer
// A list that contains elements from both l1 and l2, sorted in non-decreasing order.

// Step 1: Step through expamples

// Step 2:

// Step 3: Implement solution
