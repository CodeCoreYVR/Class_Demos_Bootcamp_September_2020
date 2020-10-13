// console.log(this);

// function printThis() {
//   console.log(this);
// }

// printThis();

const dog = {
  name: 'Henry',
  bark: function() {
    console.log(`${this.name}`)
    console.log(this)
  }
}

dog.bark

// const cat = {
//   name: 'bobby'
// }

const bindedBark = dog.bark.bind(dog)
bindedBark();

function fnAccepter(fn) {
  fn();
}

fnAccepter(bindedBark)