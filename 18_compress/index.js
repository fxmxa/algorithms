compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
compress([1, 4, 3, 2]) // '1-4'
compress([1,4]) // '1,4'

// 1. Отсортировать и потом в цикле проверять el === el - 1
// 2.

function compress(list) {
  if(!Array.isArray(list) || list.length === 0) {
    return "undefined"
  }

  const sorted = list.toSorted((a,b) => a - b )
  let res = [sorted[0]]
  let isInterval = false

  for(let i = 1; i <= sorted.length; i++) {
    const prev = sorted[i-1]
    const cur = sorted[i]

    if(cur && cur - 1 === prev) {
      isInterval = true
      continue
    }

    if(isInterval) {
      res[res.length - 1] += `-${prev}`
      isInterval = false
    }
    if(cur) {
      res.push(cur)
    }

  }
  return res.join(',')
}
