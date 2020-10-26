const { Socket } = require('dgram');
const net = require('net');

const client = new net.Socket(); // socket object reprensents a connection

const PORT = 5000;
const ADDRESS = '127.0.0.1';

client.on('data', function(data) {
  console.log(`Data recieved from server: ` + data);
  client.end(); // make sure you close the connection by calling the end() function. Otherwise the TCP connections stays open assuming there's more data to be sent
})

// connect is used to connect the client to a server
// we provide the address & port of the server we want to connect to
client.connect(PORT, ADDRESS, function() {
  // when the client is connected to a server this callback function is called
  client.write('Brandon');
});