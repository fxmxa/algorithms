class BinaryHeap {
  constructor() {
      // Массив для хранения данных.
      this.data = [];
  }

  // Добавление элемента.
  insert(node) {
    this.data.push(node)
    this.bubbleUp(this.data.length - 1)
  }

  // Удаление корневого элемента.
  // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
  extract() {
    const root = this.data[0]
    const last = this.data.pop()
    if(this.data.length) {
      this.data[0] = last
      this.sinkDown(0)
    }

    return root
}

  bubbleUp(index) {
    const parentIndex = this.getParent(index)
    if(parentIndex < 0) {
      return
    }

    const node = this.data[index]
    const parentNode = this.data[parentIndex]

    if(parentNode >= node) {
      return
    }

    this.data[parentIndex] = node
    this.data[index] = parentNode

    this.bubbleUp(parentIndex)
  }
  getParent(i) {
    return Math.floor((i-1)/ 2)
  }
  sinkDown(index) {
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2

    const item = this.data[index]
    const leftChild = leftIndex < this.data.length ?
    this.data[leftIndex] : -Infinity;
    const rightChild = rightIndex < this.data.length ?
        this.data[rightIndex] : -Infinity;

    if (item < leftChild && leftChild >= rightChild) {
      this.data[leftIndex] = item
      this.data[index] = leftChild
      this.sinkDown(leftIndex)
    }
    else if (item < rightChild && rightChild >= leftChild) {
      this.data[rightIndex] = item
      this.data[index] = rightChild
      this.sinkDown(rightIndex)
    }
  }
}

const heap = new BinaryHeap()
heap.insert(20)
heap.insert(21)
heap.insert(33)
heap.insert(29)
console.log(heap.data)
heap.extract()
console.log(heap.data)
