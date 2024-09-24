class HashTable {
  constructor(size) {
    if (!size || size < 0) {
        throw new Error('Размер должен быть положительным числом');
    }

    this.size = size;
    this.memory = new Array();
  }

	// Добавляет пару [key, value] в хеш-таблицу.
	// Если ключ существует, перезаписывает значение.
  set(key, value) {
    const keyHash = hash(key, this.size)
    const hashItems = this.memory?.[keyHash]
    const newItem = [key, value]


    if(!hashItems) {
      this.memory[keyHash] = [newItem]
      return
    }

    const item = hashItems.find( el => el[0] === key)

    if(item) {
      item[1] = value
    } else {
      hashItems.push(newItem)
    }
  }

	// Возвращает значение в хеш-таблице по ключу.
	// Если ключа нет, возвращает undefined.
  get(key) {
    const keyHash = hash(key, this.size)
    const hashItems = this.memory?.[keyHash]

    if(!hashItems) {
      return undefined
    }
    const item = hashItems.find( el => el[0] === key)

    return item ? item[1] : undefined
  }


	// Удаляет значение из хеш-таблице по ключу.
  remove(key) {
    const keyHash = hash(key, this.size)
    const hashItems = this.memory?.[keyHash]

    if(!hashItems) {
      return undefined
    }

    const itemIndex = hashItems.findIndex( el => el[0] === key)

    if(itemIndex === -1) {
      return
    }

    if(hashItems.length === 1) {
      this.memory.splice(keyHash, 1)
    }
    else {
      hashItems.splice(itemIndex, 1)
    }
  }
}

// Хеширующая функция.
function hash(key, size) {
  const MAX_LENGTH = 200;

  const start = key.length > MAX_LENGTH ?
		Math.floor((key.length % MAX_LENGTH) / 2) : 0;
  const end = Math.min(key.length, MAX_LENGTH);

  let total = 0;

  for (let i = 0; i < end; i++) {
      const charCode = key.charCodeAt(start + i);
      total = (total + charCode * (i + 1)) % size;
  }

  return total;
}

const ht = new HashTable(2)
ht.set('name', 'ivan')
ht.set('naem', 'jeka')
console.log(ht.get('naem'))
console.log(ht.get('name'))
ht.remove('name')
console.log(ht.get('name'))
