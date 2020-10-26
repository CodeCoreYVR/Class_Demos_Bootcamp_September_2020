const fs = require('fs').promises; // The file system module, for your convienence, has already promisified all their functions

// Using a promisified fs.readFile, fs.writeFile and fs.readdir from the previous lab, read the contents of every file in the directory.
// Then, combine that content into a single string.
// Write the string to another file.

const path = './readme'
// fs.readdir(path) // read directory of path and returns a promise 
//   .then(files => { // files is an array of all the file names
//     console.log(files)
//     const readFilePromiseArray = files.map(file => { // map will return a new array of promises because every callback returns a promise
//       return fs.readFile(`${path}/${file}`, { encoding: 'utf8' }) //  if successful, returns a promise resolved with the contents as the value
//     }) 
//     console.log(readFilePromiseArray)
//     return Promise.all(readFilePromiseArray) // Promise.all will resolve when every read is finished
//   })
//   .then(data => { // data is an array of strings of each of the file contents
//     const joinedData = data.join('\n')
//     return fs.writeFile('./write_here/combined_text.txt', joinedData) 
//   })
//   .then(val => {
//     console.log('finished writing to file')
//   })
//   .catch(err => {
//     console.log(err);
//   })

// // Five line solution with .then()
// fs
//   .readdir(path)
//   .then(files => Promise.all(files.map(file => fs.readFile(`${path}/${file}`, { encoding: 'utf8' }))))
//   .then(data => fs.writeFile('./write_here/combined_text.txt', data.join('\n')))
//   .then(val => console.log('finished writing to file'))
//   .catch(err => console.error(err))

async function asyncFileOperations(path) {
  try {
    // await can only be used inside of an async function
    // the argument that's passed to await will have to finish 
    // before moving on to the next line
    // the try {} block will try running the statements but if it 
    // runs into any errors, it will got to the catch block
    const files = await fs.readdir(path)
    const data = await Promise.all(files.map(file => fs.readFile(`${path}/${file}`, { encoding: 'utf8' })))
    await fs.writeFile('./write_here/combined_text.txt', data.join('\n'))
    console.log('finished writing to file')

  } catch (err) {
    console.err(err)
  }

  return 'async functions return a promise'
}

// async functions return a promise
asyncFileOperations(path)
  .then(val => console.log(val))
  .catch(err => console.error(err)) // can also catch errors down here