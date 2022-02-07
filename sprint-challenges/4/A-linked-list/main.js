// ==============================================

const clone = (x) => ({ ...x });

// ==============================================

const toStr = (head) => {
  let node = head;

  let str = '';
  while (node !== null) {
    str += `{${node.v}} -> `;
    node = node.next;
  }
  str += 'null';
  return str;
};

// ==============================================

// Input: (3) -> (4) -> (3) -> (2) -> (6) -> (1) -> (2) -> (6) -> N
const tail = { v: 6, next: null };
const node6 = { v: 4, next: null };
const node5 = { v: 3, next: node6 };
const node4 = { v: 3, next: node5 };
const node3 = { v: 3, next: node4 };
const node2 = { v: 2, next: node3 };
const node1 = { v: 2, next: node2 };
const head = { v: 1, next: node1 };

// ==============================================

const f = (head) => {
  //
  let prev = null;
  let curr = head;

  let mp = {};
  while (curr !== null) {
    const v = curr.v;
    if (mp[v]) {
      [prev, curr] = skip(prev, curr);
      console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ');
      ++mp[v];
    } else {
      prev = curr;
      curr = curr.next;
      console.log('prev: ', prev, '\tcurr: ', curr);
      mp[v] = 1;
    }
  }
  return mp;
};

// ==============================================

// console.log(toStr(clone(head)));
// f(head);
// console.log(toStr(clone(head)));

// ==============================================

const skip = (prev, curr) => {
  prev.next = curr.next;
  curr = curr.next;
  return [prev, curr];
};

// ==============================================

const skipEnd = (prev, curr) => {
  prev.next = null;
  curr = null;
  return [prev, curr];
};

// ==============================================

// const node9 = { v: 9, next: null };
// const node8 = { v: 8, next: node9 };
// const node7 = { v: 7, next: node8 };
// const node6 = { v: 6, next: node7 };
// const node5 = { v: 5, next: node6 };
// const node4 = { v: 4, next: node5 };
// const node3 = { v: 3, next: node4 };
// const node2 = { v: 2, next: node3 };
// const node1 = { v: 1, next: node2 };
// const head = { v: 0, next: node1 };

const g = (head) => {
  let prev = null;
  let curr = head;
  // let next = curr.next;

  // [curr, next] = skipBeginning(curr, next);
  console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ', curr.next);

  prev = curr;
  curr = curr.next;
  // next = curr.next;
  console.log('prev: ', prev, '\tcurr: ', curr, '\tnext: ', curr.next);

  [prev, curr] = skip(prev, curr);
  console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ', curr.next);

  prev = curr;
  curr = curr.next;
  // next = curr.next;
  console.log('prev: ', prev, '\tcurr: ', curr, '\tnext: ', curr.next);

  [prev, curr] = skip(prev, curr);
  console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ', curr.next);

  prev = curr;
  curr = curr.next;
  // next = curr.next;
  console.log('prev: ', prev, '\tcurr: ', curr, '\tnext: ', curr.next);

  [prev, curr] = skip(prev, curr);
  console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ', curr.next);

  prev = curr;
  curr = curr.next;
  // next = curr.next;
  console.log('prev: ', prev, '\tcurr: ', curr, '\tnext: ', curr.next);

  [prev, curr] = skip(prev, curr);
  console.log('prev: ', prev, '\tCURR: ', curr, '\tnext: ', curr.next);

  prev = curr;
  curr = curr.next;
  // next = curr.next;
  console.log('prev: ', prev, '\tcurr: ', curr, '\tnext: ', curr.next);

  [prev, curr] = skipEnd(prev, curr);
  console.log('prev: ', prev, '\tCURR: ', curr);
};

// ==============================================
console.log(toStr(clone(head)));
// g(head);
f(head);
console.log(toStr(clone(head)));
