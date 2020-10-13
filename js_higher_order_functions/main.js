function loud(logFn, fn) {
  logFn(`Calling ${fn.name}`);
  const value = fn();
  logFn(`The value of fn is: ${value}`);
  return value;
}

function sayHi() {
  return "Hi";
}

function sayBye() {
  return "Bye"
}


// the way to use loud: loud(console.log, sayHi);