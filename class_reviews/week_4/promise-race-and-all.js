const arrayOfPromises = [
  new Promise((res, rej) => {setTimeout(() => res('A'), 2000)}),
  new Promise((res, rej) => {setTimeout(() => res('B'), 1000)}),
  new Promise((res, rej) => {setTimeout(() => res('C'), 500)}),
]

const arrayOfPromisesWithReject = [
  new Promise((res, rej) => {setTimeout(() => res('A'), 2000)}),
  new Promise((res, rej) => {setTimeout(() => rej('B'), 1000)}),
  new Promise((res, rej) => {setTimeout(() => res('C'), 500)}),
  new Promise((res, rej) => {setTimeout(() => rej('D'), 300)}),
]

// Promise.all will return an array of promises (the array itself is wrapped in a promise too) 
// when all promises in the array resolve
Promise
  .all(arrayOfPromises)
  .then(value => console.log(`Promise.all resolved with:`, value))
  .catch(err => console.log(`Promise.all rejected with:`, err))

// If at least one promise is rejected then it goes to .catch()
Promise
  .all(arrayOfPromisesWithReject)
  .then(value => console.log(`Promise.all resolved with:`, value))
  .catch(err => console.log(`Promise.all rejected with:`, err))

// Promise.race will return the first Promise that either resolves or rejects
Promise
  .race(arrayOfPromises)
  .then(value => console.log(`Promise.race resolved with:`, value))
  .catch(err => console.log(`Promise.race rejected with:`, err))

Promise
  .race(arrayOfPromisesWithReject)
  .then(value => console.log(`Promise.race resolved with:`, value))
  .catch(err => console.log(`Promise.race rejected with:`, err))
