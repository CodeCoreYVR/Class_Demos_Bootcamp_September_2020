// Arrow functions are another syntatical way to write functions

const fnBark = function(name, sound = "Woof!") {
  return `${name} barks ${sound}`
}

const bark = (name, sound = "Woof!") => {
  return `${name} barks ${sound}`
}

// If your arrow function only has one statement you can omit the return keyword and be block
// const bark = (name, sound = "Woof!") => `${name} barks ${sound}`

const barkWithOneArg = name => `${name} barks "Woof!`;

console.log(fnBark('Bobby'));
console.log(bark('Bobby', "Meow"));


function flip(fn) {
  return function(a, b) {
    return fn(b, a);
  };
}

const flip = fn => (a, b) => fn(b, a);
