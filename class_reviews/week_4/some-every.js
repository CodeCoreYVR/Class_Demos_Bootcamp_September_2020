// some and every return a boolean
// The callbacks passed should return a boolean

// If at least one callback returns true then some() returns true
[1, 2, 3, 4].some(element => {
  return element % 2 === 0
}) // true

[1, 2, 3, 4].some(element => {
  return element % 5 === 0
}) // false

// Only if every callback returns true will every() return true
[1, 2, 3, 4].every(element => {
  return element % 2 === 0
}) // false

[1, 2, 3, 4].some(element => {
  return element % 1 === 0
}) // true
