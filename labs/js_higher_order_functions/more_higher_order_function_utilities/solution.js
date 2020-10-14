function wait(ms, fn) {
  let returnValue = null;
  return function(...args) {
    if (returnValue === null) {
      returnValue = fn(...args);
      setTimeout(() => {
        returnValue = null;
      }, ms);
    }
    return returnValue;
  };
}

// Testing with add function
const add = function(a, b) {
  return a + b;
};

// example wait usage
const wait5add = wait(5000, add); // will have to wait 5 seconds between calls
wait5add(3, 3); // return 6
wait5add(8, 3); // return 6 (until 5s ends)
wait5add(2, 8); // return 6 (until 5s ends)
wait5add(0, 3); // return 3 (5s ended)
wait5add(1, 9); // return 3 (until 5s ends)
