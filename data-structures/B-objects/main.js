// Objects

// ==============================================

const person = {
  firstName: 'josh',
  age: 38,
  hobbies: ['sports', 'cooking'],
  age: 37,
  f() {
    return `hi, i am ${this.firstName}`;
  },
  g: () => {
    return `hi, i am ${this.firstName}`;
  },
};

console.log(person['firstName']);
console.log(person.firstName);
console.log(person.age);
console.log(person.f());
console.log(person.g());

console.log(person);
delete person.age;
console.log(person);

// ==============================================

// Objects:
// --------
// -unordered key-value pairs
// -element access via key
// -not iterable (only with for-in)
// -keys are unique, values are not
// -keys must be strings, numbers, or symbols
// -can store data and functionality (methods)
