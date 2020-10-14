// class Animal {
//   constructor(legs, name) {
//     this.legs = legs;
//     this.name = name;
//   }

//   eat() {
//     console.log('nom nom nom')
//   }
// }

// class Bird extends Animal {
//   constructor(legs, name, wings) {
//     super(legs, name);
//     this.wings = wings;
//   }
// }

// const tweety = new Bird(2, 'tweety');
// tweety.eat();
// console.log(tweety);

function Animal(legs, name) {
  this.legs = legs;
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log('nom nom nom')
}

function Bird(legs, name, wings) {
  this.legs = legs;
  this.name = name;
  this.wings = wings;
}

Object.setPrototypeOf(Bird.prototype, Animal.prototype);

const tweety = new Bird(2, 'tweety');
tweety.eat();
console.log(tweety);