class MyArray {
  constructor(initialSize = 1) {
    if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
      throw new Error('Длина массива должна быть целым числом');
    }

    if (!(initialSize > 0)) {
      throw new Error('Размер массива должен быть больше нуля');
    }

    this.size = initialSize;
    this.memory = allocate(initialSize);
    this.length = 0;
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index){
    if(index >= this.size ) {
      throw new Error('индекс за пределами массива')
    }
    return this.memory[index]
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    if(index >= this.size ) {
      throw new Error('индекс за пределами массива')
    }
    this.memory[index] = value;
  }

  doubleMemory() {
    this.size *= 2
    this.memory = {...allocate(this.size), ...this.memory }

  }

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    if(typeof index !== 'undefined' && index >= this.size ) {
      throw new Error('индекс за пределами массива')
    }

    const lastIndex = this.size - 1;
    const last = this.get(lastIndex)

    if( typeof last !== 'undefined' ) {
      this.doubleMemory()
    }

    if( typeof index === 'undefined') {
      this.set(this.size - 1, value)
    }

    else {
      let temp = this.get(index)
      this.set(index, value)

      for(let i = index + 1; i < this.size; i++) {
        const newEl = temp
        temp = this.get(i)
        this.set(i, newEl)
      }
    }
    this.legth += 1
    return this.length
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    if(index >= this.size ) {
      throw new Error('индекс за пределами массива')
    }

    for(let i = index + 1; i < this.size; i++) {
      const newEl = this.get(i)
      this.set(i - 1, newEl)
    }
    delete this.memory[this.size - 1]
    this.length -= 1
    return this.length
  }
}

const array = new MyArray(3)
console.table(array)

array.add(1)
array.add(5)
console.table(array)
array.delete(2)
console.table(array)


function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}
