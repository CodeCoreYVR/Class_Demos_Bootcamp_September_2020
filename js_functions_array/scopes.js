// const & let - Good
// Because they're block scoped

// var - Bad
// Bad Because it's function scoped

const a = 'A';
const b = 'hello'

{
  const b = 'B';
  console.log(`logging a within block: ${a}`);
  console.log(`logging b within block: ${b}`); // because b is defined within this scope we can reference it.
}

console.log(`logging outside of block: ${a}`);
// console.log(`logging b within block: ${b}`); // b is not defined within this scope we cannot reference it.
console.log(`logging outside of block: ${c}`);