function delay(ms, value) {
  return new Promise((res, rej) => {
    if (value === 'purple') {
      rej('No purple allowed');
    }
    setTimeout(() => {
      res(value)
    }, ms);
  });
}

// delay(3000, "blue") // we wrapped setTimeout in a Promise (delay is basically an asnyc function)
//   .then((val) => { // .then is to do something after the promise turns into a value (a resolved value)
//     console.log(val);
//     return delay(2000, "purple");
//   })
//   .then((val) => {
//     console.log(val);
//     return delay(1000, "green");
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => { // .then is to do something if the promise turns intoa bad value
//     console.log(`Error ${err}`);
//   })


// Promise.all // a method on the Promise object that accepts an array of promises
// It will execute all the promises in parallel
// When all promises resolve you can .then to get all the values of promises in an array

Promise.all([
  delay(2000, 'blue'),
  delay(1000, 'red'),
  // delay(5000, 'green'),
  delay(1, 'purple') // so if any of these promises reject. The entire array of promises is considered rejected and the .catch block is invoked
]).then(colors => {
  console.log(colors);
}).catch(err => {
  console.log(err);
})

Promise.race([
  delay(1000, 'blue'),
  delay(999, 'red'),
  delay(0, 'green'),
]).then(horse => {
  console.log(`${horse} has won!`)
})