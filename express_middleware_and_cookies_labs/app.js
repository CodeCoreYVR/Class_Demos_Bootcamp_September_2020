const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // puts submitted form data on req.body
app.use(cookieParser()); // puts cookie data on req.cookies
app.use(express.static(path.join(__dirname, 'public')));

// routes

// Home Page
app.get('/', (req, res) => {
  const name = req.cookies.name;
  const language = req.cookies.language;
  let greeting = ''
  switch (language.toLowerCase()) {
    case 'english':
      greeting = 'Hello'
      break;
    case 'french':
      greeting = 'Bonjour'
      break;
    case 'spanish':
      greeting = 'Hola'
      break;
    default:
      greeting = 'Hi'
      break;
  }
  res.render('home', { name, greeting });
})

// Language Selection page
app.get('/language', (req, res) => {
  res.render('language');
})

// Handle Language Selection Form Submission
app.post('/language', (req, res) => {
  const data = req.body;

  const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  res.cookie('name', data.name, { maxAge: ONE_WEEK });
  res.cookie('language', data.language, { maxAge: ONE_WEEK });
  res.redirect('/');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
