class Queue {
	constructor() {
			this.size = 0;
			this.head = null;
			this.tail = null;
	}
	
	// Ставит элемент в очередь.
	// Возвращает новый размер очереди.
	enqueue(value) {
			const node = { value, next: null, prev: null };

			if(this.isEmpty()) {
				this.head = node
				this.tail = node
			}
			else {
				this.tail.next = node
				node.prev = this.tail
				this.tail = node
			}
			this.size++

			return this.size
	}
	
	// Убирает элемент из очереди.
	// Если очередь пустая, кидает ошибку.
	// Возвращает удалённый элемент.
	dequeue() {
		if(this.isEmpty()) {
			throw new Error('Нельзя убрать элемент из пустой очереди!')
		}

		const removedElement = this.head
		const nextElement = removedElement.next

		this.head = nextElement
		removedElement.next = null

		if(nextElement) {
			nextElement.prev = null
		}

		this.size--

		return removedElement
	}

	
	// Возвращает элемент в начале очереди.
	peek() {
		if(this.isEmpty()) {
			throw new Error('Нельзя убрать элемент из пустой очереди!')
		}
		return this.head
	}
	
	// Если очередь пустая, возвращает true. В противном случае –– false.
	isEmpty() {
			return this.size === 0
	}
}

const queue = new Queue()

queue.enqueue(11)
queue.enqueue(22)
queue.enqueue(33)

queue.dequeue()
queue.dequeue()


console.log('file: index.js:43 ~ queue:', queue.peek())
