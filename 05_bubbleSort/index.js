function bubbleSort(arr) {
  let len = arr.length - 1
  while (len > 1) {
      for (let i = 0; i < len; i++) {
        if(arr[i] > arr[i+1]) {
          swap(arr, i, i + 1)
        }
      }
      len--
  }
  return arr;
}

function swap(arr, i, j) {
  const tmp = arr[i];

  arr[i] = arr[j];
  arr[j] = tmp;
}

const res = bubbleSort([6,5,3,1,8,7,2,4])
console.log('file: index.js:22 ~ res:', res)

