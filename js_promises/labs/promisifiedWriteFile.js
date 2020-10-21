const fs = require('fs');

function writeFile(path, data, options) {
  return new Promise((res, rej) => {
    fs.writeFile(path, data, options, (err) => {
      if (err) {
        rej(err);
      }
      res(true);
    })
  })
}


const promise = writeFile('./write_here/text.txt', 'hello world', { encoding: 'utf8' })
  .then(res => {
    console.log('file written!')
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
console.log(promise);

// Promises can be in 3 different states
// 1) Pending
// 2) Fulfilled
// 3) Rejected