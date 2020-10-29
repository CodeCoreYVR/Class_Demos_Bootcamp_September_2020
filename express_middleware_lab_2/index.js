const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', 'templates'); // normally it would be called views

// middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  const { notes } = req.cookies;
  // notes is a JSON object
  const parsedNotes = JSON.parse(notes);
  res.render('notes', { notes: parsedNotes });
})

app.get('/new_note', (req, res) => {
  res.render('newNotes');
})

app.post('/new_note', (req, res) => {
  const currentNotes = req.cookies.notes; // the current saved notes (from the cookie)
  const note = req.body.note; // the note that the user has entered in the form

  let newNotes = currentNotes;
  if (typeof newNotes === 'string') { // if the notes cookie is a string we use JSON.parse to turn it into an array
    newNotes = JSON.parse(newNotes);
  }
  if (!newNotes) { // if the notes cookie is undefined we create a new array
    newNotes = []
  }
  newNotes.push(note);
  const jsonNewNotes = JSON.stringify(newNotes) // newNotes is an array. Because cookies can not store a javascript array we turn the array into JSON which is just a string/text

  const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  res.cookie('notes', jsonNewNotes, { maxAge: ONE_WEEK });
  res.redirect('/new_note');
})

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log('server running');
})