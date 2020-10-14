const dog = {
  name: 'Henry',
  age: 21,
  bark: function() {
    console.log(`woof I'm ${this.name}`)
  }
}

const dog2 = {
  name: 'Bobby',
  age: 15,
  bark: function() {
    console.log(`woof I'm ${this.name}`)
  }
}

// const dog3 = Object.assign({}, dog2);
// dog3.name = 'Brandon'
// console.log(dog3);

// Constructor - A special function used to create objects

function Dog(name, age) {
  this.name = name;
  this.age = age;

  return 'I create objects';
}

// To add a method to the prototype. We select the `prototype` of the constructor and add properties to it
Dog.prototype.fetch = function() {
  console.log(`${this.name} fetches...`)
}

// Instance - A indivudal object created by a Constructor

const henry = new Dog('Henry', 9);
const bobby = new Dog('Bobby', 3);

// Everytime you create an instance of a Constructor a __proto__ property is set to reference the prototype of Constructor

// You can define new methods on the prototype at anytime and ALL instances will be able to use it.
Dog.prototype.bark = function() {
  console.log(`Woof! My name is ${this.name}`)
}

henry.bark();
console.log(henry.toString());
// henry.bark();
// bobby.bark();

console.log(henry.__proto__);

// instanceof - A operator used to check if a object is an Instance of a Constructor
// console.log(henry instanceof Dog); // henry was created using the Dog constructor so it is an instance
// console.log(dog2 instanceof Dog); // dog2 was created using object literal syntax so it is not an instance of Dog

// Exercise: Counter - Create a counter Constructor

function Counter(start = 100, step) {
  this.count = start;
  this.step = step || 10;
  // add method to increment; when invoked it will increment `count` by `step` amount
}

Counter.prototype.dec = function() {
  if (this.count <= 0) {
    return;
  }
  this.count = this.count - this.step;
}

Counter.prototype.inc = function() {
  this.count = this.count + this.step;
}

const c1 = new Counter(0, 10);
c1.inc();
c1.inc();
c1.inc();
console.log(c1);
const c2 = new Counter(100, 5);
c2.dec();
c2.dec();
c2.dec();
console.log(c2);