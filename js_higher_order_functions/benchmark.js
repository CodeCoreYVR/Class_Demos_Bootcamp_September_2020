function recursiveSum(arr) {
  if (arr.length === 0) { // termination case
    return 0;
  } else {
    return arr[0] + recursiveSum(arr.slice(1)) // recursive case
  }
}

function iterativeSum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

function getNumbers(n) {
  const numbers = [];
  let i = 1;
  while (i < n) {
    numbers.push(i);
    i++;
  }
  return numbers;
}

const testArr = getNumbers(5000);

console.time('recursive');
recursiveSum(testArr);
console.timeEnd('recursive');

console.time('iterative');
iterativeSum(testArr);
console.timeEnd('iterative');
