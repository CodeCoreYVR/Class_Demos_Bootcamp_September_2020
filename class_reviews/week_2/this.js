function whatIsThis(param) {
  // Just as with params, the value of "this" is not known
  // until the function is invoked 
  console.log("param:", param)
  console.log("this:", this) 
}

const obj = { 
  whatIsThis: whatIsThis
}

whatIsThis("Hello World")
obj.whatIsThis(['a', 'b'])

// Let's say you eat some food and you want to describe that food's taste
// You won't say "Chicken tastes awful!", instead you'll say "This tastes great!"
function describeTaste() {
  console.log(`${this.name} tastes ${this.taste}!`)
}

const food1 = {
  name: 'Chicken',
  taste: 'awful',
  describeTaste,
}

const food2 = {
  name: 'Vegetarian Pizza',
  taste: 'great',
  describeTaste,
}

food1.describeTaste()
food2.describeTaste()
