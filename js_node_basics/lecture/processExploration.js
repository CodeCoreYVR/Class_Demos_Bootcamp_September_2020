// > process.pid
// 20100
// > process.version
// 'v12.18.4'
// > process.platform
// 'darwin'
// > process.title
// 'node'

// process.argv
// console.log(process.argc)
console.log("Process.argv:", process.argv)

console.log(process.argv[2]);
console.log(process.argv[3]);

// console.log(process.argc)

process.exit(-1);
// 👆🏻 This Quits the running application
console.log('My Name') // Shouldnt print anything
