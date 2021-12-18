// Sets

// ==============================================

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) {
  console.log(el);
}

console.log(ids.has('abc'));

console.log(ids);
ids.delete('bb2');
console.log(ids);

// ==============================================

// Arrays:                Sets
// -------                ----
// -Order matters         -Order does not matter
// -Duplicates ok         -No duplicates
// -Linear lookup         -Constant lookup (deletion and finding is FAST)
// -Iterable (for-of)     -Iterable (for-of)      [SAME]
// -Dynamic size          -Dynamic size           [SAME]
