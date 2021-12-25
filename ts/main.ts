let mp1: {
  a: string;
};
mp1['a'] = 'a';

// -Dynamic (computed) properties
let mp2: {
  [key: string]: string;
};
mp2['a'] = 'a';
mp2['b'] = 'b';
