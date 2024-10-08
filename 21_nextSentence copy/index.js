function match(str) {

  const length = str.length
  if(!length) {
    return undefined
  }

  const numbers = Array(length + 1).fill(0).map((el, i) => i)
  const res = []

  for(let i =0; i < length; i++) {
    const index = str[i] === 'I' ? 0 : -1
    const num = numbers.splice(index, 1)[0]
    res.push(num)
  }
  res.push(numbers[0])


  return res
}

match('III') // [0,1,2,3]
match('DDI') // [3,2,0,1]
match('IDID') // [0,4,1,3,2]
