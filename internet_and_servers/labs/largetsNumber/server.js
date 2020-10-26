const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => {
    const dataString = data.toString(); // convert data from buffer to string
    const numbersArray = dataString.split(','); // convert string of numbers to array of strings
    const parsedNumbersArray = numbersArray.map(number => parseInt(number)); // convert the array of strings into numbers
    const maxNumber = Math.max(...parsedNumbersArray);
    socket.write(`${maxNumber}`); // anytime you're trying to send stuff to another server it can only be a string or a buffer.
  });
});

const PORT = 5000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log('Sever started')
})

