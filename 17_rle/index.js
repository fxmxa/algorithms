function rle(str) {
  if (!/^[A-Z]*$/.test(str)) {
      throw new Error('string is not valid');
  }

  let res = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
          count++;
      } else {
          res += count === 1 ? str[i - 1] : str[i - 1] + count;
          count = 1;
      }
  }
  console.log('file: index.js:43 ~ res:', res)

  return res;
}

const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB' // A4B3C2XYZD4E3F3A6B28


rle(str)
