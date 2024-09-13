function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++ ) {
		const insertionIndex = findInsertionIndex(arr, i)
		if (insertionIndex !== i ) {
			shiftElements(arr, insertionIndex, i)
		}
	}

	return arr;
}

function findInsertionIndex(arr, i) {
	for (let j = 0; j < i; j++) {
		if (arr[i] < arr[j]) {
			return j;
		}
	}
	return i;
}

function shiftElements(arr, insertionIndex, i) {
	const value = arr[i];

	for (let j = i; j >= insertionIndex; j--) {
		arr[j] = arr[j-1]
	}

	arr[insertionIndex] = value;
}

const res = insertionSort([ 172, 147, 98, 44, 132, 73, 140, 155, 59, 10 ])
console.log('file: index.js:32 ~ res:', res)
