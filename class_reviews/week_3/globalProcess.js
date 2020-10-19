// The "global" object has a lot of methods and properties to aid with
// running a script/program using Node
// console.log(global) 

// When we use "process.argv" or "console", we do not need to prepend "global", it is implied
console.log(process.argv === global.process.argv)
console.log(console === global.console)

// We define a local 'setTimeout' using const or let
// local to the JS file
const setTimeout = () => {
  console.log('From local setTimeout')
}

// Now that a local setTimeout variable has been declared, 
// when we use setTimeout, it will use the local variable 
// instead of the method on the global object
// Therefore we now need to prepend global to use the method on the global object
// This executes the global setTimeout that is built in to Node
global.setTimeout(() => {
  console.log('From original setTimeout, in callback')
}, 3000)

// We reassign the setTimeout property on the global object to be another function
global.setTimeout = () => {
  console.log('From global.setTimeout')
}

// invoking the local setTimeout
// if we did not have a local setTimeout defined, then this is global.setTimeout
setTimeout() 

// invokes the global setTimeout
global.setTimeout() 

const hi = "hi there" // local variable scoped to this file

// This will reassign a property on the global object if you reassign 
// and don't use const or let
// same as global.hello = "hello there"
hello = "hello there" 

console.log(hi) // "hi there"
console.log(global.hi) // undefined
console.log(global.hello) // "hello there"
