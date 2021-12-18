const f = (str) => {
  const arr = str.split('');
  console.log('arr: ', arr);

  let out = [];
  for (let i = 0, j = str.length - 1; i < str.length; ++i, --j) {
    const temp = arr[j];
    if (temp == temp.toUpperCase()) {
      out[i] = temp.toLowerCase();
    } else if (temp == temp.toLowerCase()) {
      out[i] = temp.toUpperCase();
    }
  }
  return out.join('');
};

console.log(f('AbC'));
