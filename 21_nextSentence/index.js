function allSentences(words) {

  const indexes = words.map(_ => {
    return 0
  });


  return function() {

    if(indexes[0] === words[0].length) {
      return undefined
    }

    const sentence =  indexes.map( (el, i) => {
      return words[i][el]
    }).join(' ')

    let i = indexes.length - 1

    while(i >= 0) {
      indexes[i]++
      if(indexes[i] === words[i].length) {

        if(i === 0) {
          break
        }
        indexes[i] = 0
        i--
        continue

      }

      break
    }


    return sentence
  }
}
// Тек строка, пока до нее не дошли нужно перебрать все предыдущие
// Запомнить строку и индекс который меняли максимум и последний раз
// когда дошли до максимума то сбросить все следующие до 0 и последний раз до 0

const nextSentence = allSentences([
    ['внучка', 'дочь', 'сестра'],
    ['маша', 'юля', 'ольга'],
    ['любит', 'поет', 'ест']
]);
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
console.log(nextSentence())
