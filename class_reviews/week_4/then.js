const beNice = () => "I am nice"
const promise = Promise.resolve() // Promise.resolve() returns a resolve promise
  
  // .then() is called when a promise is resolved
  // .then() returns a promise resolved with the value of whatever the callback returns
  // since it returns a promise, it allows us to chain .then()
  .then(() => 'abc') 

  // data is the value the promise that .then() was called on was resolved with ("abc")
  .then(data => console.log(data)) 

