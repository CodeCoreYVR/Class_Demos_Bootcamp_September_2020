// JS Promises
// Javascript has a Promise constructor used to create a new instance of a promise
// The constructor accepts a callback as an argument
// The callback has 2 arguments:
// 1) a function called resolve
// 2) a function called reject

// const DELAY = 2000;
// const THREE_SECONDS = 3000;

// const pinkyPromise = new Promise((resolve, reject) => {
//   if (DELAY > THREE_SECONDS) {
//     reject('Bad Value');
//   }

//   setTimeout(() => {
//     resolve('Good Value');
//   }, DELAY)
// })

// console.log(pinkyPromise);
// pinkyPromise.then((data) => {
//   console.log(data);
// })

function flipCoin() {
  return new Promise((resolve, reject) => {
    // 1 will represent face
    // 0 will represent tails
    const face = [1,0][Math.floor(Math.random() * 2)]; // will give us a random number between 0 - 1
    if (face === 1) {
      reject(1); // reject is used to return a bad value
      // only the .catch will have the rejected value
    } else {
      resolve(0); // resolve is used to return a good value
      // only the .then will have the resolved value
    }
  })
}

const penny = flipCoin();
penny.then((result) => { // argument within .then is always the resolved value within the Promise's definition
  console.log('then was invoked');
  console.log(result);
}).catch((err) => { // argument within .catch is always the rejected value within the Promise's definition
  console.log('catch was invoked');
  console.log(`Error: it was ${err}`);
})

const toonie = flipCoin();
toonie.then((result) => {
  console.log(`toonie was flipped it resolved ${result}`)
}).catch((err) => {
  console.log(`toonie was flipped it rejected ${err}`)
})