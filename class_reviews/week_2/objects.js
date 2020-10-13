// JS: Objects
// key/property - value pairs  
// keys are strings
// values can be any data-type
// Use braces to define an object, don't confuse this with a code block
// Everytime we create using {}, we define a new object in memory

const myObj = {
  a: 5, 
  b: 5 + 5,
  numbers: [3, 4, 5],
}

// We can read a value associated to a key using dot notation
myObj.a // 5

// Dot notation is shorthand for using []
// Using [], we can pass in an expression or using variables to 
// evaluate the key name that we access
myObj["a"] // 5

// key names are unique
myObj.a = 10
myObj // { a: 10, b: 5 + 5, numbers: [3, 4, 5], }

// Methods:
function lick() {
  return "licking..."
}

const dog = {
  name: "Gabe",
  // pre-ES6 syntax
  bark: function() {
    return 'Bork'
  }, 
  // ES6:
  // We can invoke this method using "eat"
  eat() {
    return "Eating..."
  },

  // Short property name
  // lick: lick,
  lick,
}

// or we can define methods like this:
dog.play = function() { return "playing" }
dog.jump = () => "jumping"

dog.lick // returns method definition
dog.lick() // invoke the method

Object.keys(dog) // ['name', 'bark', 'eat', 'lick', 'play', 'jump']
Object.values(dog) // returns all the values in an array
