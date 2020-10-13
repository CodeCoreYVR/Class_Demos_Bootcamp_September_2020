const data = [5, 10, -2, 17, 9]

// "acc" is an accumlator that is the return value of the previous callback
// "num" is each value in the array
// 0 is the initial value of acc in the first callback
const sum = data.reduce((acc, num) => {
  return acc += num
}, 0)

console.log(sum)
