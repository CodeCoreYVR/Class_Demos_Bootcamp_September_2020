// Classes are syntax sugar for writing constructors and prototypes

class Dog {
  // The constructor is a speical method/function of the class that is invoked when you create a new instance
  // This is basically the Constructor Function
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.sleep = function() { // method defined on instances
      console.log('zzzz')
    }

    this.printThis = this.printThis.bind(this);
  }

  // To define prototype methods we can write them within the curly braces of the class

  // Dog.protytpe.bark = function() {}
  bark() {
    console.log(`Woof! My name is ${this.name}`);
  }

  fetch() {
    console.log(`${this.name} fetches...`);
  }

  printThis() {
    console.log(this);
    return this;
  }

  // Arrow function equivalent of the above
  // printThis = () => {
  //   console.log(this);
  //   return this;
  // }
}

const henry = new Dog('Henry', 5);
const winston = new Dog('Winny', 12);
henry.bark(); // "Woof! My name is Henry"
winston.bark(); // "Woof! My name is Winston"

class DoggoFighter extends Dog { // to inherit prototypes you use the extends keyword followed by the class/constructor function you want to inherit
  constructor(name, age, specialAbility) {
    super(name, age); // super is a function that refers to the Parent class's constructor
    this.specialAbility = specialAbility;
  }
}

const DrillBitDarrel = new DoggoFighter('Drill Bit Darrel', 5, 'drill');
// DrillBitDarrel.fetch();

// console.log(DrillBitDarrel.printThis())

function fnAccepter(fn) {
  console.log(fn());
}

fnAccepter(DrillBitDarrel.printThis);
