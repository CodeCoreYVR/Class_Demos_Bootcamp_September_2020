const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // req represents the client request
  // res used to create a response to the request
  const parsedUrl = url.parse(req.url, true);
  const grade = parsedUrl.query.grade;
  let letterGrade = '';
  if (grade > 90) {
    letterGrade = 'A';
  } else if (grade > 80) {
    letterGrade = 'B';
  } else if (grade > 70) {
    letterGrade = 'C';
  } else if (grade > 60) {
    letterGrade = 'D';
  } else if (grade > 50) {
    letterGrade = 'F';
  } else {
    letterGrade = 'Failed class ):'
  }
  res.write(`<h1>${letterGrade}</h1>`);
  res.end();
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Sever Started on ${HOST}:${PORT}`);
})