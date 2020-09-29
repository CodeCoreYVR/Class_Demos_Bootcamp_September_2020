let argumentOne = process.argv[2];

if (argumentOne === 'secret') {
  console.log('safe unlocked');
} else {
  console.log('wrong password');
}