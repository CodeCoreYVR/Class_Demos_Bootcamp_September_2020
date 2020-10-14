function after(min, fn) {
  let count = 0;
  return function(...args) {
    count++;
    if (count > min) {
      return fn(...args);
    }
  };
}

function before(max, fn) {
  let count = 0;
  return function(...args) {
    count++;
    if (count <= max) {
      return fn(...args);
    }
  };
}

const l = console.log;

function add(a, b) {
  return a + b;
}

const addAfter3Tries = after(3, add);
l(addAfter3Tries(4, 5)); // returns undefined
l(addAfter3Tries(4, 2)); // returns undefined
l(addAfter3Tries(1, 6)); // returns undefined
l(addAfter3Tries(5, 5)); // returns 10 (add is only allowed to return now)
l(addAfter3Tries(1, 5)); // returns 6

// before usage example
const only3Times = before(3, add);
l(only3Times(4, 5)); // returns 9
l(only3Times(4, 2)); // returns 6
l(only3Times(1, 6)); // returns 7
l(only3Times(5, 5)); // returns undefined (no more calls to add allowed)
l(only3Times(9, 9)); // returns undefined
l('------------------------------------------'); // <---- to separate the logs

/*
  I hate code repetition
  Here is a generalized version of the function above. It will return a function
  that will become our `after` or `before` functions. They are almost identical,
  the only difference being is the `if-statement` for both. This solution
  recognizes that. We do not expect you to be able to write code like this,
  but this is something you will be capable of in the future.
  If you feel inclined, take a look and see if you can figure out what is going
  on here. This is definitely not important is is considered "SUPER STRETCH"
*/

// Higher-higher order function to reduce code repetition:

function counter(checker) {
  return function(min, fn) {
    let count = 0;
    return function(...args) {
      count++;
      if (checker(count, min)) {
        return fn(...args);
      }
    };
  };
}

const after2 = counter((count, min) => count > min);
const before2 = counter((count, min) => count <= min);

// Logging to show it working the same as the previous solution
const addAfter3Tries2 = after2(3, add);
l(addAfter3Tries2(4, 5)); // returns undefined
l(addAfter3Tries2(4, 2)); // returns undefined
l(addAfter3Tries2(1, 6)); // returns undefined
l(addAfter3Tries2(5, 5)); // returns 10 (add is only allowed to return now)
l(addAfter3Tries2(1, 5)); // returns 6

// before usage example
const only3Times2 = before2(3, add);
l(only3Times2(4, 5)); // returns 9
l(only3Times2(4, 2)); // returns 6
l(only3Times2(1, 6)); // returns 7
l(only3Times2(5, 5)); // returns undefined (no more calls to add allowed)
l(only3Times2(9, 9)); // returns undefined
