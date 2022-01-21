// Hash-Map

// ==============================================

class HashTable {
  constructor() {
    this.size = 16;
    this.buckets = Array(this.size).fill(null);
  }

  // -Add a new key-value pair
  hash(key) {
    // If key already exists, over-write that value
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(); // UTF-16 encoding
    }
    return hash % this.size;
  }

  set(key, value) {
    const hashKey = this.hash(key);
    this.buckets[hashKey] = value;
  }

  get(key) {
    const hashKey = this.hash(key);
    return this.buckets[hashKey];
  }

  showInfo() {
    for (const key in this.buckets) {
      // for-in loops over keys
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

// ==============================================

const dupicateChars = (str) => {
  const table = {};
  for (let char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
};

// ==============================================

const dupicateCharsCustomHashTable = (str) => {
  const table = new HashTable();
  for (let char of str) {
    if (table.get(char)) {
      return char;
    }
    table.set(char, 1);
  }
};

// ==============================================

console.log(dupicateChars('abcdde'));
console.log(dupicateCharsCustomHashTable('abcdde'));

// ==============================================

const table1 = new HashTable();
for (const char of 'banana') {
  table1.set(char, char);
}

for (const char of 'hello') {
  table1.set(char, char);
}

for (const char of 'does this work') {
  table1.set(char, char);
}

console.log(table1.showInfo());
