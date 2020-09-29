console.log('hello');
console.log(process.argv);
console.log(process.argv[2]);

// process.argv is a special variable that has a list of all the arguments given when running the script
// it's an indexed value so we can select the first argument we've provided by using square bracket notation looking for the 2 index (the 0 and 1st index are things we don't care about)

const argumentOne = process.argv[2];
console.log(argumentOne);

const argumentTwo = process.argv[3];
console.log(argumentTwo);

console.log('-----------------------------------')

// Control flow

// if statement

if (true) {
  console.log('Burn them all!');
} else {
  console.log('Feed them cake!');
}

// you can add additional else if statemnts to extend the functionality of an if statemnt.
// the first statement that is true will get executed the rest are ignored.
if (10 > 100) {
  console.log('10 is greater than 1000');
} else if (150 < 100) {
  console.log('150 is greater than 100');
} else if (200 < 100) {
  console.log('200 is greater than 100');
} else {
  console.log('default statement reached')
}

// ternary operator / expression

// left hand side of the ? operator is evaluated into a boolean
true ? console.log('true') : console.log('false');
// if true the left hand side of the colon (:) is executed
// if false teh right hand side of the colon (:) is executed


// while loops
// within the parenthesis is a conditional expression. If it is true the loop will continue to run
let i = 100;
while (i >= 0) {
  // do something
  console.log(i);
  i = i - 1;
}

// for loop
// 3 arguments are declared in the parenthesis
// 1) a variable declaration
// 2) the conditional expression
// 3) a optional incrementation expression
for (let j = 0; j < 5; j++) {
  console.log(j);
}

