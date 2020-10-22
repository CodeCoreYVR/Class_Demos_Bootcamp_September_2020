const fs = require('fs').promises; // The file system module, for your convienence, has already promisified all their functions

// Using a promisified fs.readFile, fs.writeFile and fs.readdir from the previous lab, read the contents of every file in the directory.
// Then, combine that content into a single string.
// Write the string to another file.

const path = './readme'
fs.readdir(path)
  .then(files => {
    console.log(files)
    const readFilePromiseArray = files.map(file => {
      return fs.readFile(`${path}/${file}`, { encoding: 'utf8' })
    })
    console.log(readFilePromiseArray)
    return Promise.all(readFilePromiseArray)
  })
  .then(data => {
    const joinedData = data.join('\n')
    return fs.writeFile('./write_here/combined_text.txt', joinedData)
  })
  .then(val => {
    console.log('finished writing to file')
  })
  .catch(err => {
    console.log(err);
  })