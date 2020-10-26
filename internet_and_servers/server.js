const net = require('net');
// net is a module built into NodeJS that is used for creating TCP servers

const server = net.createServer(function (socket) {
  // this callback function is an event listener
  // an event listener is a function that will trigger on a specified event

  // the `socket` argument is an object that represents a connection
  socket.on("data", (data) => {
    // data event listener. Whenver the server recieves "data" it will trigger this callback
    // the data argument represents the data coming in from a client's request
    console.log(`Server got data: ${data.toString()}`);
    socket.write(`Hello, ${data.toString()}`);
  })

  socket.on("end", () => {
    console.log('----------------conection closed----------------------')
  })
})

const PORT = 5000;
const ADDRESS = '127.0.0.1'; // localhost address / loopback address
// the domain name for 127.0.0.1 is `localhost`
// createServer is a function used to create a server

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on ${ADDRESS}:${PORT}`);
})
// server.listen is used to make the server listen for requests from clients at a given port & address
