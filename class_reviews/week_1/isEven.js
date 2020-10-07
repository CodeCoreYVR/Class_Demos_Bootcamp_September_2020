// Solve this without using the % or / operator 

function isEven(n) {
  let answer = false

  // check if the n parameter is a number
  if (typeof n !== 'number') {
    return "Argument must be a number"
  }

  // Since we know that every other number is even/odd
  // we can iterate n + 1 number of times and flip the boolean
  if (n >= 0) {
    for (let i = 0; i <= n; i++) {
      answer = !answer
    } 
  } else { // make answer work for negative as well
    for (let i = 0; i >= n; i--) {
      answer = !answer
    }
  }

  return answer
}
