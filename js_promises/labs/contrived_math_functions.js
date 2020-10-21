// Create a collection of "async" math functions that return promises. Any function

// can be made asynchronous by using setTimeout without a time argument.

// Create the following functions:

// add: Sums two numbers together.
// mult: Multiplies two arguments together.
// div: Divides the first argument by the last.
// sub: Subtracts the last argument from the first.
// pow: Raises the first to the power of the second.

function add(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      reject('can only add numbers')
    }
    setTimeout(() => {
      resolve(a + b);
    })
  })
}

function mult(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      reject('can only add numbers')
    }
    setTimeout(() => {
      resolve(a * b);
    })
  })
}

function div(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      reject('can only add numbers')
    }
    setTimeout(() => {
      resolve(a / b);
    })
  })
}

function sub(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      reject('can only add numbers')
    }
    setTimeout(() => {
      resolve(a - b);
    })
  })
}

function pow(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
      reject('can only add numbers')
    }
    setTimeout(() => {
      resolve(a ** b);
    })
  })
}

// 1 + 10 - 5 + 5 * 2
add(1, 10) // 11;
  .then(val => {
    console.log(val);
    return sub(val, 5)
  })
  .then(val => {
    console.log(val);
    return add(val, '5')
  })
  .then(val => {
    console.log(val);
    return mult(val, 2);
  })
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log(err);
  })
