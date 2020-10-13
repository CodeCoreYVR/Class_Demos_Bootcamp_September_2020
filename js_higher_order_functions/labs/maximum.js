function iterativeMax(arr) {
  let max = -Infinity;
  for (let number of arr) {
    if (max < number) {
      max = number;
    }
  }
  return max;
}

// console.log(iterativeMax([ 213, 12, 66, 999 ])); // 999
// console.log(iterativeMax([ 1, 2, 3, 11, 3, 6, 5 ])); // 11

function recursiveMax(arr) {
  // termination case.
  if (arr.length === 1) {
    return arr[0];
  }
  // recursive case
  let a = arr.pop();
  let b = recursiveMax(arr);
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const testArr = Array.from({length: 9000}, () => Math.floor(Math.random() * 10000));
console.time('iterative');
iterativeMax(testArr);
console.timeEnd('iterative');

console.time('recursive');
recursiveMax(testArr);
console.timeEnd('recursive');

