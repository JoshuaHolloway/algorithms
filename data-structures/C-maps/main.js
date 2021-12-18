// Maps

// ==============================================

const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = { name: 'Germany', population: 82 };
resultData.set(germany, 0.89);

console.log(resultData);

for (const el of resultData) {
  console.log('map: ', el);
}

// -overwrites 'average'
resultData.set('average', 33.89);
console.log(resultData);

// -keys (iterable)
const keys = resultData.keys();
console.log('keys: ', keys);
for (const key of keys) {
  console.log('key: ', key);
}

// -values (iterable)
const vals = resultData.values();
console.log('vals: ', vals);
for (const val of vals) {
  console.log('vals', val);
}

// -Reference Value keys
resultData.delete({ name: 'Germany', population: 82 }); // -Does NOT work
console.log(resultData);
resultData.delete(germany);
console.log(resultData);

// ==============================================

// Maps:                                          Objects
// --------                                       -------
// -Ordered key-value pairs                       -Un-Ordered key-value pairs
// -Element access via key                        -[SAME]
// -Iterable (for-of)                             -Not iterable (only with for-in)
// -Keys are unique, values are not               -[SAME]
// -keys can be ANYTHING (including ref-values)   -keys must be strings, numbers, or symbols
// -pure data storate, optimized for data access  -can store data and functionality (methods)
