const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log('server running');
})