// Arrays are a ordered list of items
// Items within the array are refered to as elements
// To define an array we use []

let fruits = ['apple', 'banans', 'grapes', 50, ['hello'], 
  function() {
    console.log('function called');
  }
];
console.log(fruits[5]());


// Select elements of an array using square bracket notation
console.log(fruits[2]); // grapes
console.log(fruits[fruits.length - 1]); // returns last element in array
console.log(fruits[1 + 2]); // 50

// Operations

// Length of an array
console.log(fruits.length) // 

// Concatenate - join two arrays
const array1 = [1,2,3,4,5];
console.log(array1.concat([6, 7, 8]));

// Slicing - get a portion of an array
const array2 = [1,2,3,4,5];
console.log(array2.slice(0, 3));

// Mutation - changing the original array

console.log('-------------------------')

// Push - add something to an array
const pets = ['monkey', 'fish', 'dog'];
// pets.push('cat');
const newPets = pets.concat(['cat']);
console.log(pets);
console.log(newPets);

// Shift - remove the first element from an array
console.log('-------------------------')
pets.shift();
console.log(pets);

// Pop - remove the last element
console.log('-------------------------')
pets.pop();
console.log(pets);

// Overwrite elements
const favouriteColours = ['blue', 'red', 'green'];
favouriteColours[2] = 'black';
console.log(favouriteColours);

// Check if Array is Array
console.log(Array.isArray(favouriteColours));

// Check if a element exists in an Array

console.log('------------------------------------')
console.log(favouriteColours.includes('red')); // true

