const fs = require('fs');

function readFile(path, options) {
  return new Promise((res, rej) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    })
  })
}

function readDir(path, options) {
  return new Promise((res, rej) => {
    fs.readdir(path, options, (err, files) => {
      if (err) {
        rej(err);
      }
      res(files);
    })
  })
}

// readFile('./promises.js', { encoding: 'utf8' })
//   .then(data => {
//     console.log(data);
//     return readFile('./async.js', { encoding: 'utf8' });
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(`There was an error ${err}`);
//   })

readDir('./readme')
  .then((files) => {
    files.forEach(file => {
      readFile(`./readme/${file}`, { encoding: 'utf8' })
        .then(data => {
          console.log(data);
        })
    })
  })

readDir('./readme')
  .then((files) => {
    return Promise.all(files.map(file => {
      return readFile(`./readme/${file}`, { encoding: 'utf8' })
    }))
  })
  .then(data => {
    console.log(data);
  })
