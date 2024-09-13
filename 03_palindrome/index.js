// palindrome('Anna') === true
// palindrome('table') === false

function palindrome (str) {
  const oldStr = str.toLowerCase()
  const newStr = [...oldStr].reverse().join('')
  return oldStr === newStr
}
console.log(palindrome('table'))
