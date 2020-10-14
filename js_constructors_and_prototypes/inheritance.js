function Dog(name, age) {
  this.name = name;
  this.age = age;

  return 'I create objects';
}

Dog.prototype.fetch = function() {
  console.log(`${this.name} fetches...`)
}

Dog.prototype.bark = function() {
  console.log(`Woof! My name is ${this.name}`)
}

function DoggoFighter(name, age, specialAbility) {
  this.name = name;
  this.age = age;
  this.specialAbility = specialAbility;
}

const regularDoggo = new Dog('Henry', 5);
const DrillBitDarrel = new DoggoFighter('Drill Bit Darrel', 10, 'Drill');

console.log(DrillBitDarrel.specialAbility); // Drill
// DrillBitDarrel.fetch();

// To make a Constructor/Class inherit methods and properties from another Constructor/Class we use the method
// Object.setPrototypeof;

Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype);
DrillBitDarrel.fetch();
console.log(DrillBitDarrel.__proto__); // DoggoFighter
console.log(DrillBitDarrel.__proto__.__proto__); // Dog