function flatten(arr) {
  // output will be defined as new array in every function call
  let output = []

  arr.forEach(element => {
    if (Array.isArray(element)) {
      output = flatten([...output, ...flatten(element)]) 
    } else {
      // if we run into the most deeply nested array,
      // we'll never recursively call flatten in the if clause
      // and just push the elements to the output 
      // and return, thus terminating the recursive call
      // and clearing the stack
      output.push(element)
    }
  })

  return output
}

// flatten([1, 2, [3, [4, 5]]]) 
// flatten([1, 2, ...flatten([3, [4, 5]])])
// flatten([1, 2, ...[3, ...flatten([4, 5])]])
// flatten([1, 2, ...[3, ...[4, 5]]])
// flatten([1, 2, ...[3, 4, 5]])
// flatten([1, 2, 3, 4, 5])
// [1, 2, 3, 4, 5]

console.log(flatten([ 1, 2, [3, [4, 5] ] ])) // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten([ 'a', [ 'b', ['c'] ] ])) // returns [ 'a', 'b', 'c' ]
console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])) // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
