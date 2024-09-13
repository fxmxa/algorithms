// fizzBuzz(6) => [0, 1, 2, fizz, 4, buzz, fizz]

const fizzBuzz = num => {
  const arr = []
  for(let i = 0; i <= num; i++) {

    if( i === 0 ) {
      arr.push(i)
    }
    else if( i % 3 === 0 && i % 5 === 0 ) {
      arr.push('fizzbuzz')
    }
    else if( i % 3 === 0 ) {
      arr.push('fizz')
    }
    else if( i % 5 === 0 ) {
      arr.push('buzz')
    }
    else {
      arr.push(i)
    }
  }

  return arr
}
const res = fizzBuzz(6)
console.table( res);
