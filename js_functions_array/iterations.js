const arr = ['a', 'b', 'c'];

// for loop

for (let i = 0; i < arr.length; i++) {
  console.log(`Index of ${i} has the value of ${arr[i]}`);
}

// for of loop

for (let x of arr) {
  console.log(`Value: ${x}`);
}

// for of loop is used to iterate over "iterables". A string is considered iterable
const name = "brandon";
for (let character of name) {
  console.log(character);
}

// Exercise - Sum

function sum(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    let sum = 0;
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  } 
  return sum;
}

console.log(sum([1, 2, 3, 'A', 4])); // should be 10