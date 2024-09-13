class DoublyLinkedList {
	
	constructor() {
			this.size = 0;
			this.head = null;
			this.tail = null;
	}
	
	// Добавляет элемент в список.
	// Если указан индекс - добавляет по индексу, 
	// в противном случае добавляет в конец.
	// Если индекс за пределами — кидает ошибку.
	add(value, index) {

		const node = createNode(value)

		if(Number.isInteger(index)) {
			this.checkIndex(index)
			const nodeAtIndex = this.searchByIndex(index)

			if(nodeAtIndex === this.head) {
				this.head = node
			}

			node.next = nodeAtIndex
			node.prev = nodeAtIndex.prev

			nodeAtIndex.prev = node
		}
		else if(!this.head) {
			this.head = node
			this.tail = node
		} 
		else {
			node.prev = this.tail
			this.tail.next = node
			this.tail = node
		}
		this.size++

	}
	
	// Удаляет элемент из списка по значению.
	// Удаляет только первый найденный элемент.
	// Если элемент не найден, ничего делать не нужно.

	removeByValue(value) {
		const node = this.searchByValue(value)
		this.removeNode(node)
	}
	
	// Удаляет элемент из списка по индексу.
	// Если индекс за пределами — кидает ошибку.

	checkIndex(index) {
		if( typeof index === 'undefined') {
			return
		}
		if(index >= this.size || index < 0) {
			throw new Error('index not in list')
		}
	}

	removeByIndex(index) {
		const node = this.searchByIndex(index)
		this.removeNode(node)
	}
	
	// Ищет элемент в списке по индексу.
	// Если индекс за пределами — кидает ошибку.

	searchByIndex(index) {
		this.checkIndex(index)

		let curIndex = 0
		let node = this.head
		while(index !== curIndex) {
			node = node.next
			curIndex++
		}

		return node

	}

	// Ищет элемент в списке по значению.
	// Возвращает первый найденный элемент.
	// Опционально можно указать индекс начала поиска.
	// Если индекс за пределами — кидает ошибку.
	// Если элемент не найден, нужно вернуть null.

	searchByValue(value, startIndex = 0) {
		this.checkIndex(startIndex)
		let node = this.head
		let curIndex = 0
		while(node) {
			if(curIndex < startIndex) {
				curIndex++
				node = node.next
				continue
			}

			if(node.value === value) {
				break
			}
			node = node.next
		}
		return node
	}

	removeNode(node) {
		const { prev, next } = node
		
		if(prev) {
			prev.next = next
		}
		else {
			this.head = next
		}
		
		if(next) {
			next.prev = prev
		} 
		else {
			this.tail = prev
		}
		node = null
		this.size--
	}
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду

function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	}
}


const list = new DoublyLinkedList();

list.add(5);
list.add(3);
list.add(-13);
list.add(10);


console.log(list.head);