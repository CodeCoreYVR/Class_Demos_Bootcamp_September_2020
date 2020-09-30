// Exercise - Sum

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] === 'number') {
      total += numbers[i];
    }
  } 
  return total;
}

console.log(sum([1, 2, 3, 'A', 4])); // should be 10