// Re-implement the Array.reduce function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function reduce(arr, callback, initial) {
  let acc = initial
  for (let i = 1; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}

function reduceWithEdgeCase(arr, callback, initial) {
  let acc = arr[0];
  let i = 1;
  if (initial) {
    i = 0;
    acc = initial
  }
  while(i < arr.length) {
    acc = callback(acc, arr[i], i, arr);
    i++
  }
  return acc;
}

function plus(accumulator, currentValue) {
  return accumulator + currentValue;
}

const numbers = [1, 2, 3, 4, 5];

const reducedArr = reduce(numbers, plus); // 15

// console.log(reducedArr);

console.log(reduceWithEdgeCase(numbers, plus, 5));
console.log(reduceWithEdgeCase(numbers, plus, 0));
console.log(reduceWithEdgeCase(numbers, plus));