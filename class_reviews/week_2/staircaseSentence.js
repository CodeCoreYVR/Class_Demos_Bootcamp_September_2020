const words = process.argv[2].split(' ')
let indent = ''

for (let i = 0; i < words.length; i++) {
  console.log(indent + words[i])
  indent += ' '

  // if there's a period, indexOf() will not return -1
  // and indent will be reset to ''
  if (words[i].indexOf('.') !== -1) indent = ''
}
