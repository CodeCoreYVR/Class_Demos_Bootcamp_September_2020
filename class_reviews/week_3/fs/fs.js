const fs = require("fs")

// First argument is the string path to a directory to read
// Second argument is a callback that is invoked after reading the directory
fs.readdir(__dirname, (err, data) => {
  if (err) throw err

  // if the "err" object is undefined, that means the read was successful and 
  // the code below will run
  console.log(data)
})

const fileContents = "Hello from fs"
const fileName = "hello.txt"
// 1st arg: file name, it will be created in the current directory
// 2nd arg: content of file
// 3rd arg: callback
fs.writeFile(fileName, fileContents, err => {
  if (err) throw err
  console.log(`${fileName} was created`)
})

fs.stat(fileName, (err, data) => {
  if (err) throw err
  console.log(data)
})

fs.readFile(fileName, (err, data) => {
  if (err) throw err

  // toString() converts the buffer to a string
  console.log(data.toString()) 
})

// Even though this line comes after the console.logs in the callbacks, 
// it will always execute before those
// Working with files takes time, but JS can only run one thing at a time (single-threaded)
// However Node is asynchronous and non-blocking, you can continue excuting the rest of this JS script while it's performing
// the file actions on your system. Once the actions have completed, it will run the 
// code in the callbacks once the JS script has finished running and the thread is clear.
console.log("Does this print first?")
console.log("Yes it does because the JS script will complete running before async code is run")
