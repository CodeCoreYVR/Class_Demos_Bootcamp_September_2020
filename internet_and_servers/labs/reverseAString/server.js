const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => {
    const string = data.toString();
    const reversedString = string.split('').reverse().join('');
    socket.write(reversedString);
  })

  socket.on('end', err => {
    console.log('------ connection closed ------');
  })
});

const PORT = 8080;
const ADDRESS = '127.0.0.1';

server.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});
