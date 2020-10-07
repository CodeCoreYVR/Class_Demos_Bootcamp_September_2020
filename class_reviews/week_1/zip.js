function zip(arrA, arrB) {
  // return undefined if arrays are not the same length
  if (arrA.length !== arrB.length) return

  const array2D = []
  // push a nested array of elements from both 
  // arrA and arrB to the two-dimensional array
  for (let i = 0; i < arrA.length; i++) {
    array2D.push([arrA[i], arrB[i]])
  }

  return array2D
}

console.log(zip([1, 2, 3], [4, 5, 6]))
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow']))
console.log(zip([0, 0, 0], []))
console.log(zip(['x', 'y', 'z'], [5, 6, 10]))
