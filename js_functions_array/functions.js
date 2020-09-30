// Function is a named block of code that can be saved and executed at a later point in time

// Function declaration - With delcartions Javascript knows these things exist before running the file. So you can call the function `add` before it is defined because it's a function declaration.
function add(numberOne, numberTwo) {
  const total = numberOne + numberTwo;
  return total;
}

// To use a function you need to "call" or "invoke". To call a function reference the function name and append parenthesis after it.
// console.log(add(5, 3))
// console.log(add())
// console.log(add(1))

// Calling a function is an expression. It will always resolve to a value.

// Expressions are resolved only once Javascript starts running. So you can't access the `sum` function before it is defined

// console.log(sum(4,5)) This will cause error because sum is defined as an expression below the call
// Function Expression
let sum = function (numberOne, numberTwo) {
  const sum = numberOne + numberTwo;
  return sum;
}


function doMath() {
  return sum(20,5)
}

console.log(doMath())

// Rude Bot - Demo

function insult(name) {
  const randNum = Math.floor(Math.random() * 3); // gets random number between 0-2
  if (randNum === 0) {
    return `${name}, you doofus!`;
  } else if (randNum === 1) {
    return `${name}, your father smelt of elderberries!`;
  } else {
    return `your mother was a hamster, ${name}`;
  }
}

console.log(insult('bob'));
