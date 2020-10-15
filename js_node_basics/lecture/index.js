// const {add,sub}=require('./add');
const calc=require("./add")
const primes=require('./prime');

console.log(primes.reduce(calc.add,0));
console.log(primes.reduce(calc.sub,0));