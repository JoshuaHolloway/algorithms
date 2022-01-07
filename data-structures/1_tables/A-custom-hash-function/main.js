// Custom Hash Function

// ==============================================

const utf16_encoding = (char) => Number(char.charCodeAt(0));

// ==============================================

const hash_func = (str, num_buckets) => {
  // -Map string to integer in range [0, num_buckets]
  let sum = 0;
  for (let char of str) {
    sum += utf16_encoding(char);
  }
  return sum % num_buckets;
};

// ==============================================

class Table {
  constructor(N) {
    this.N = N;
    this.item_count = 0;
    this.buckets = new Array(N);
    for (let i = 0; i < N; ++i) {
      this.buckets[i] = [];
    }
  }

  // --------------------------------------------

  // h(str) {
  //   // -TODO: Use a non-trash hash function: (e.g. djb2)
  //   //        to avoid problems with non-prime
  //   //        number hash table size.

  //   // str -> index
  //   let sum = 0;
  //   for (let char of str) sum += utf16_encoding(char);
  //   return sum % this.N;
  // }

  // --------------------------------------------
  h2(s) {
    let hash = 17;

    for (let i = 0; i < s.length; ++i) {
      hash = (13 * hash * s.charCodeAt(i)) % this.N;
    }

    return hash;
  }

  // --------------------------------------------

  insert(key, value) {
    const idx = this.h2(key);
    if (this.buckets[idx]) this.buckets[idx].push({ key, value });
    else this.buckets[idx] = [{ key, value }];

    // this.buckets[idx].push({ key, value });
    this.updateSize('increase');
  }

  // --------------------------------------------

  lookup(key) {
    const idx = this.h(key);
    if (this.buckets[idx].length > 0) {
      // -search the array for the key
      for (let j = 0; j < this.buckets[idx].length; ++j) {
        if (this.buckets[idx][j].key === key) {
          return this.buckets[idx][j].value;
        }
      }
    }
  }

  // --------------------------------------------

  delete(key) {
    const idx = this.h(key);
    if (this.buckets[idx].length > 0) {
      // -search the array for the key
      for (let j = 0; j < this.buckets[idx].length; ++j) {
        if (this.buckets[idx][j].key === key) {
          this.buckets[idx].splice(j, 1); // (start, delete_count) : in-place
        }
      }
      --this.item_count;
      // TODO: Evaluate Load Facter
      // TODO:  -If too large then double size
      // TODO:  -If too small then halve size
    }
  }

  // --------------------------------------------

  // NOTE: Should either increase the size to a prime number
  //       or use a non-trash hash function that allows for
  //      -Ideally, just use a non-trash hash function
  //       because using a power of two table size
  //       will substantially speed up index computation.
  updateSize(type = 'increase') {
    if (type === 'increase') {
      ++this.item_count;
      if (this.getLoadFactor() > 0.7) {
        // -Double size
        this.resize(2 * this.N);
      }
    }
    // else if (type === 'decrease') {
    //   --this.item_count;
    //   if (this.getLoadFactor() < 0.3) {
    //     // -Halve size
    //     this.resize(Math.ceil(0.5 * this.N));
    //   }
    // } else throw new Error('updateSize()');
  }

  // --------------------------------------------

  getLoadFactor() {
    return this.item_count / this.N;
  }

  // --------------------------------------------

  resize(new_capacity) {
    // -DEBUGGING:
    let debug_buckets = [...this.buckets];
    console.log(
      'begin resize \tload-factor: ',
      this.getLoadFactor(),
      '\nbuckets BEFORE resize: ',
      debug_buckets
    );

    const old_buckets = this.buckets;

    // -Create new buckets array and reset item_count (to not add to the previous value in .insert())
    this.item_count = 0;
    this.buckets = new Array(new_capacity);

    // -Initialize the bucket array with empty chains (arrays) to be able to use .length in the for loop (I just prefer this to testing for having undefined values in buckets array)
    for (let i = 0; i < new_capacity; ++i) {
      this.buckets[i] = [];
    }

    const old_capacity = this.N;
    this.N = new_capacity;

    // -Loop over OLD buckets (array)
    //  --Loop over the elements in the chained array for a slot in the buckets.
    //    ---Insert into new buckets
    for (let i = 0; i < old_capacity; ++i) {
      // console.log('old_buckets[i]: ', old_buckets[i]);
      for (let j = 0; j < old_buckets[i].length; ++j) {
        const { key, value } = old_buckets[i][j];
        this.insert(key, value);
        // console.log(`bucket i=${i} key: ${key}, value: ${value}`);
      }
    }

    debug_buckets = [...this.buckets];
    console.log(
      'resize complete \tload-factor: ',
      this.getLoadFactor(),
      '\nbuckets After resize: ',
      debug_buckets
    );
  }

  // --------------------------------------------
}

// ==============================================

// console.log(utf16_encoding('A')); // 65   ---   A in ASCII === A in UTF-8 === A in UTF-16 === binary (100 0001)_2 = hex (0x41)_16 = decimal (64+1    = 65)_10
// console.log(utf16_encoding('a')); // 97   ---   a in ASCII === a in UTF-8 === a in UTF-16 === binary (110 0001)_2 = hex (0x61)_16 = decimal (64+32+1 = 97)_10
// console.log(hash_func('Aa', 2)); // 65 + 97 = 162 => 162 % 2 === 0

// ==============================================

const ht = new Table(8);
ht.insert('A', 'A');
// console.log('ht.buckets: ', ht.buckets);

ht.insert('a', 'a');
ht.insert('b', 'b');
ht.insert('c', 'c');
ht.insert('d', 'd');
ht.insert('e', 'e');
ht.insert('f', 'f');
ht.insert('g', 'g');
ht.insert('h', 'h');
ht.insert('i', 'i');
ht.insert('j', 'j');
ht.insert('k', 'k');
ht.insert('l', 'l');
ht.insert('m', 'm');
ht.insert('n', 'n');
ht.insert('o', 'o');
ht.insert('p', 'p');
ht.insert('q', 'q');
ht.insert('r', 'r');
ht.insert('s', 's');
ht.insert('t', 't');
ht.insert('u', 'u');
ht.insert('v', 'v');
ht.insert('w', 'w');
ht.insert('x', 'x');
ht.insert('y', 'y');
ht.insert('z', 'z');

// console.log('table: ', ht.table);
// console.log("ht.lookup('A'): ", ht.lookup('A'));
// console.log("ht.lookup('a'): ", ht.lookup('a'));
// console.log("ht.lookup('b'): ", ht.lookup('b'));

// ht.delete('a');

// console.clear();
// console.log(
//   'buckets: ',
//   ht.buckets,
//   '\nitem count: ',
//   ht.item_count,
//   '\nload factor: ',
//   ht.getLoadFactor()
// );

ht.h2('a');
