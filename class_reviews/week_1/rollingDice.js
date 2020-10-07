Math.random() // returns a number between 0 and 1 but not inclusive of 1
// so actually it returns between 0 - 0.999999999999999

// We need to +1 because the maximum value we get from Math.random() * 6
// is 0.999999999999 * 6, which will round down to 5, and values below 1 will also
// round down to 0, so our range is 0-5 before adding +1
Math.floor(Math.random() * 6) + 1

// We can also use Math.ceil()
Math.ceil(Math.random() * 6)

const quantity = parseInt(process.argv[2])
const faces = parseInt(process.argv[3])
let average 
let total = 0

const rolls = []
for (let i = 1; i <= quantity; i++) {
  rolls.push(Math.ceil(Math.random() * faces))
}

for (let roll of rolls) {
  total += roll
  console.log(roll)
}

console.log('-----------------------')
console.log('Average Roll: ', total / quantity)
console.log('Total: ', total)
