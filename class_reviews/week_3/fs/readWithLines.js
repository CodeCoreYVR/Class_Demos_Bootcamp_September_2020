const fs = require('fs')
const fileName = process.argv[2]

fs.readFile(fileName, (err, data) => {
  const fileContents = data.toString()
  const fileLines = fileContents.split("\n")
  fileLines.forEach((line, index) => {
    console.log(`${index + 1}${" ".repeat()} | ${line}`)
  })
})
