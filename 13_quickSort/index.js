function quickSort(arr, start = 0, end = arr.length - 1) {

  if(end < start) {
    return arr
  }
  
	const index = partition(arr, start, end)

  quickSort(arr, start, index - 1)
  quickSort(arr, index + 1, end)

  return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const arr = [6,5,3,1,8,7,2,4]
quickSort(arr)
console.log(arr)