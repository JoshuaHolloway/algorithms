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

  // -Did not test .find()
  // find(value) {
  //   if (!this.head) {
  //     // list is empty
  //     return null;
  //   }

  //   let currNode = this.head;

  //   while (currNode) {
  //     if ((curNode.value = value)) {
  //       return currNode;
  //     }
  //     currNode = currNode.next;
  //   }

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

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function f(l, value) {}

// Note:
//  -Your solution should have O(n) time complexity,
//   where n is the number of elements in l.

// Problem Statement:
// -You have a singly linked list l, which is sorted in
//  strictly increasing order, and an integer value.
// -Add value to the list l, preserving its original sorting.

// Note:
// -in examples below and tests preview linked lists
//  are presented as arrays just for simplicity of visualization.
// -in real data you will be given a head node l of the linked list

// Examples:
// -For l = [1, 3, 4, 6] and value = 5,
//  the output should be f(l, value) = [1, 3, 4, 5, 6];
// -For l = [1, 3, 4, 6] and value = 10, the output should
//  be f(l, value) = [1, 3, 4, 6, 10];
// -For l = [1, 3, 4, 6] and value = 0, the output should be
//  solution(l, value) = [0, 1, 3, 4, 6].

// Input/Output
//  -[execution time limit] 4 seconds (js)
//  -[input] linkedlist.integer l
//    --A singly linked list of integers sorted in strictly increasing order. Thus, all integers in the list are pairwise distinct.
//
// Guaranteed constraints:
//  0 ≤ list size ≤ 104,
//  -109 ≤ element value ≤ 109.

// [input] integer value
//  -A single integer value to be inserted into l.
//  -It is guaranteed that there is not an element equal
//   to value in l before the insertion is performed.

// Guaranteed constraints:
// -109 ≤ value ≤ 109.

// [output] linkedlist.integer
//  -Return l after inserting value into it, with the original sorting preserved.

// ==============================================

// Step 1: Step through example

// [1, 3, 4, 5, 6] = f(l = [1, 3, 4, 6] and v = 5)

// [1, 3, 4, 6, 10] = f(l = [1, 3, 4, 6] and v = 10)

// [0, 1, 3, 4, 6] = f(l = [1, 3, 4, 6] and v = 0)

// Step 2: Strategize a solution
//  -A: Search the list for the first value that is directly larger than v.
//    --Can use binary search: O(log_2(n))
//  -B:
//    --

// Step 3: Implement step 2
// -See insertBelowNextLargest() method

// Step 4: Test shit

// [1, 3, 4, 5, 6] = f(l = [1, 3, 4, 6] and v = 5)
const ll_1 = new LinkedList();
ll_1.append(1);
ll_1.append(3);
ll_1.append(4);
ll_1.append(6);
ll_1.insertBelowNextLargest(5);
console.log('[1,3,4,5,6] = f([1,3,4,6], 5) -> ', ll_1.toArray());

// [1, 3, 4, 6, 10] = f(l = [1, 3, 4, 6] and v = 10)
const ll_2 = new LinkedList();
ll_2.append(1);
ll_2.append(3);
ll_2.append(4);
ll_2.append(6);
ll_2.insertBelowNextLargest(10);
console.log('[1,3,4,6,10] = f([1,3,4,6], 10) -> ', ll_2.toArray());

// [0, 1, 3, 4, 6] = f(l = [1, 3, 4, 6] and v = 0)
const ll_3 = new LinkedList();
ll_3.append(1);
ll_3.append(3);
ll_3.append(4);
ll_3.append(6);
ll_3.insertBelowNextLargest(0);
console.log('[0,1,3,4,6] = f([1,3,4,6], 0) -> ', ll_3.toArray());
