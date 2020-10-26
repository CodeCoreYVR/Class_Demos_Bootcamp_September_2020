const net = require('net');

const client = new net.Socket;

client.on('data', data => { 
  console.log(data.toString());
  client.end();
});

const PORT = 5000;
const HOST = 'localhost';
client.connect(PORT, HOST, () => {
  const arguments = process.argv.slice(2).join(',');
  console.log(arguments);
  client.write(arguments);
})
