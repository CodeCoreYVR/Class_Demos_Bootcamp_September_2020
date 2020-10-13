// function a() {
//   b()
//   console.log('a')
// }

// function b() {
//   c()
//   console.log('b')
// }

// function c() {
//   console.log('c')
// }

// a();

function sum(arr) {
  if (arr.length === 0) { // termination case
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1)) // recursive case
  }
}

const result = sum([1,2,3,4]);
console.log(result);

// Reverse a string using recursion

function reverse(str) {
  if (str.length === 0) {
    return '';
  } else {
    return str[str.length - 1] + reverse(str.substring(0, str.length -1))
    // return `${str[str.length -1]}${reverse(str.substring(0, str.length - 1))}`
  }
}

console.log(reverse("Hello")) // "olleH";