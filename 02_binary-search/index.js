function binarySearch(list, element) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let count = 0;
  while (position === -1 && first < last) {
    count++
    const mid = Math.floor((first + last) / 2);
    if (list[mid] === element) {
      position = mid;
    }
    if (list[mid] < element)
      first = mid + 1;
    else {
      last = mid;
    }
  }
  console.log(count);
  return position;
}
const list = new Array(1000000).fill(0).map((_, i) => i);

let res = binarySearch(list, 10)
