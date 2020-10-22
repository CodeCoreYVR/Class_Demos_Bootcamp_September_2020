const fs = require('fs'); // file system module built into NodeJS allows us to access the file system on our machine.

// Async functions are function in javascript that can run concurrently (at the same) as other functions

// Async functions will always accept a callback function. It will invoke the callback when it's asynchronous action has completed

// setTimeout
// Will execute a function after a set delay
// Arguments:
// 1) Callback Fn
// 2) the delay in ms
// console.log('script started');

// setTimeout(function() {
//   console.log('waited 3 seconds...')
//   setTimeout(function() {
//     console.log('waited another 3 seconds...')
//     setTimeout(function() {
//       console.log('waited another 3 seconds...')
//     }, 3000)
//   }, 3000)
// }, 3000)

// console.log('after setTimeout')

// -- Read directory demo
// fs.readdir allows us to read a directory's content
// it takes 2 arguemnts:
// 1) the relative path to a directory
// 2) callback: the callback has 2 arguments:
//    a) err object
//    b) files of the directory

const source = process.argv[2]; // argument given to a node script
fs.readdir(source, (err, files) => {
  if (err) {
    console.log(`Error finding files ${err}`);
  } else {
    console.log(files);
    // fs.mkdir allows us to create a directory
    // it takes in 2 arguments:
    // 1) path of the new directory - should include directory name
    // 2) options object OR a callback with 1 argument:
    //    a) err obj
    fs.mkdir(`${source}/copies`, (err) => {
      if (err) {
        console.log(`Error creating directory: ${err}`);
      } else {
        files.forEach((filename) => {
          // fs.readFile use to read contents of a file
          // it has 3 arguments:
          // 1) path to the file
          // 2) optional options object
          // 3) callback with 2 arguments:
          //    a) err obj
          //    b) data
          fs.readFile(`${source}/${filename}`, { encoding: 'utf8' }, (err, data) => {
            if (err) {
              console.log(`Error reading file: ${source}/${filename} err: ${err}`);
            } else {
              console.log(data);
              // fs.writeFile allows you to create file and write data into it
              // it has 3 arguments:
              // 1) path
              // 2) data to write into the file
              // 3) optional options object
              // 4) callback with 2 arguments:
              //    a) err obj
              fs.writeFile(`${source}/copies/${filename}_copy`, data, (err) => {
                if (err) {
                  console.log(`Error writing file: ${err}`);
                } else {
                  console.log(`created a copy of ${filename}`);
                }
              })
            }
          })
        })
      }
    })
  }
})