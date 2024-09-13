class Stack {
	constructor() {
			this.size = 0;
			this.head = null;
			this.tail = null;
	}

	// Кладёт элемент на стек.
	// Возвращает новый размер стека.
	push(value) {
			const node = { value, next: null, prev: null };
			
			if(!this.head) {
				this.head = node
				this.tail = node
			} else {
				node.prev = this.tail
				this.tail.next = node
				this.tail = node
			}

			this.size++
			return this.size
	}
	
	// Убирает элемент со стека.
	// Если стек пустой, кидает ошибку.
	// Возвращает удалённый элемент.
	pop() { 
		if(this.size === 0) {
			throw new Error('Stack is empty!')
		}

		const popEl = this.tail

		if(this.size > 1) {
			const prev = this.tail.prev
			prev.next = null
			this.tail = prev
		}
		else {
			this.tail = null
			this.head = null
		}

		this.size--
		return popEl
		
	}
	
	// Возвращает верхний элемент стека без его удаления.
	peek() {
		return this.tail
	}
	
	// Если стек пуст, возвращает true. В противном случае –– false.
	isEmpty() {
		return !this.size
	}
}

const stack = new Stack()
stack.push(12)
stack.push(32)
stack.push(100)




console.log(stack.peek())