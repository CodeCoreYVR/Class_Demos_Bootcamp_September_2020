const fs = require('fs')

// here we take the two arguments from the array from slice that we get
// from process.argv and use destructuring assignment
// width is a variable with the value of the first element
// height is a variable with the value of the second element
// if the arguments are 3 and 5 then e.g. const [ width, height ] = [ 3, 5 ]
const [ width, height ] = process.argv.slice(2, 4)

let row = "*".repeat(width) + '\n'
let rectangle = row.repeat(height)

const fileName = `${width}_by_${height}.txt`

fs.writeFile(fileName, rectangle, err => {
  if (err) throw err
  console.log(`fileName was written`)
})
