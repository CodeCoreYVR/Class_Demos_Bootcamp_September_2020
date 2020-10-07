function largestNumber(x) {
  let largest = x[0];
  for (let element of x) {
    if (largest < element) {
      largest = element;
    }
  }
  return largest
}

function largestNumberVersion2(x) {
  let largest = x[0];
  for (let i = 0; i < x.length; i++) {
    if (largest < x[i]) {
      largest = x[i];
    }
  }
  return largest
}

console.log(largestNumberVersion2([40, 2, 13, 34, 42])) // returns 42

console.log(largestNumberVersion2([1, 2, 3, 4, 5, 6])) // returns 6

console.log(largestNumberVersion2([99, 77, 55, 33, 22, 11])) // returns 99

console.log(largestNumberVersion2([-53425325, -32423423, 0])); // 0