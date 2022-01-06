// Custom Hash Function

// ==============================================

const utf16_encoding = (char) => Number(char.charCodeAt(0));

// ==============================================

const hash_func = (str, table_size) => {
  // -Map string to integer in range [0, table_size]
  let sum = 0;
  for (char of str) {
    sum += utf16_encoding(char);
  }
  return sum % table_size;
};

// ==============================================

class Table {
  constructor(N) {
    this.N = N;
    this.table = new Array(N);
  }

  h(str) {
    // str -> index
    let sum = 0;
    for (char of str) sum += utf16_encoding(char);
    return sum % this.N;
  }

  insert(key, value) {
    const idx = this.h(key);
    if (this.table[idx]) this.table[idx].push({ key, value });
    else this.table[idx] = [{ key, value }];
  }

  lookup(key) {
    const idx = this.h(key);
    if (this.table[idx]) {
      // -search the array for the key
      for (let j = 0; j < this.table[idx].length; ++j) {
        if (this.table[idx][j].key === key) {
          return this.table[idx][j].value;
        }
      }
    }
  }
}

// ==============================================

console.log(utf16_encoding('A')); // 65   ---   A in ASCII === A in UTF-8 === A in UTF-16 === binary (100 0001)_2 = hex (0x41)_16 = decimal (64+1    = 65)_10
console.log(utf16_encoding('a')); // 97   ---   a in ASCII === a in UTF-8 === a in UTF-16 === binary (110 0001)_2 = hex (0x61)_16 = decimal (64+32+1 = 97)_10

console.log(hash_func('Aa', 2)); // 65 + 97 = 162

// ==============================================

const ht = new Table(3);
ht.insert('A', 'A');
ht.insert('a', 'a');
ht.insert('b', 'b');
console.log('table: ', ht.table);
console.log("ht.lookup('A'): ", ht.lookup('A'));
console.log("ht.lookup('a'): ", ht.lookup('a'));
console.log("ht.lookup('b'): ", ht.lookup('b'));
