const net = require('net');
const argument = process.argv[2];

const client = new net.Socket;

client.on('data', data => {
  console.log(data.toString());
  client.end();
})

const PORT = 8080;
const HOST = 'localhost';

client.connect(PORT, HOST, () => {
  console.log('connected to server');
  client.write(argument);
})
