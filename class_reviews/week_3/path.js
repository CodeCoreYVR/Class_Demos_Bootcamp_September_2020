const path = require('path')
// When requiring modules, Node will use the argument string to find a module in this order:
// 1. First it looks for a core Node module with that name in the string argument
// 2. If it does not find that core module, then it trys to find a package that is installed inside
// of node_modules (from a directory inside of node_modules)
// 3. If it doesn't find that, then it looks for it as a path to a file

// ["a", "b", "c"].join("-") is the array method join
// It's not the same path.join(), which takes in argument strings for each level of directories/files
const anson = path.join("/", "Users", "anson")

console.log(anson)

console.log(__dirname) // gets the path to current directory of module as an absolute path from the root of our drive or server
console.log(__filename) // gets the path to current module as an absolute path from the root of our drive or server

const newFile = path.join(__dirname, "newFile.js")

console.log(newFile)
