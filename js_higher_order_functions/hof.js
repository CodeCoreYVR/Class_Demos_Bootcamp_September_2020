// function definition
function add(a, b) {
  return a + b;
}

// invoke a function is an expression
// const val = add(1,3);
// console.log(val); // 4

// we can reference a function by using it's name
// console.log(add);

// Higher-Order-Function is a function that will recieve/accept a function as an argument OR return a function

function fnAccepter(fn) { // fn should be a function.
  console.log(fn());
}

function sayHi() {
  return "Hello";
}

function saybye() {
  return "GoodBye"
}
 
// fnAccepter('hello'); // gives us an error becasue fnAccepter tries to invoke the string of 'hello'
fnAccepter(sayHi); // will log out "Hello"

function add(a, b) {
  return a + b;
}

function fnReturner() {
  return add;
}

const adder = fnReturner();
// console.log(add === adder);

const r = fnReturner()(1,3);
// console.log(r);


// -------- Built in HOF ------------

// Array.forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function(val, index, a) {
//   console.log(`The current element is ${val}`);
//   console.log(`The index is ${index}`);
//   console.log(`The original array is ${a}`);
//   // console.log(val * 2);
// })

// console.log('--------------------------------')
// // Re-creation of Array.forEach

// function forEach(arr, callback) {
//   // for (let element of arr) {
//   //   callback(element);
//   // }

//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr, 'Hello World');
//   }
// }

// forEach(arr, function(val, index, a, b) {
//   console.log(`The current element is ${val}`);
//   console.log(`The index is ${index}`);
//   console.log(`The original array is ${a}`);
//   console.log(b);
// });


// Array.map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const strings = ["a", "b", "c", "d", "e"];

function repeat(val, index, arr) {
  return val.repeat(index);
}

const rr = strings.map(repeat);

console.log(rr);

// Re-creation

function ourMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

const ttt = ourMap(strings, function(val, index) {
  return val.repeat(index)
});
console.log(ttt);
