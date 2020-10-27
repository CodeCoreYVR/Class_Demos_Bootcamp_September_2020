const express = require('express');
const logger = require('morgan');
const fs = require('fs').promises;

const app = express();

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/car_status', (req, res) => {
  const carYear = req.query.carYear;
  let carOldness = '';
  const currentDate = new Date();
  const oneYearAgo = currentDate.getFullYear() - 1;
  const threeYearsAgo = currentDate.getFullYear() - 3;
  const fiveYearsAgo = currentDate.getFullYear() - 5;
  if (carYear > oneYearAgo) {
    carOldness = 'Very New'
  } else if (carYear > threeYearsAgo) {
    carOldness = 'New'
  } else if (carYear > fiveYearsAgo) {
    carOldness = 'Old'
  } else {
    carOldness = 'Very Old'
  }
  res.render('carStatus', { carYear: carOldness });
});

app.get('/random_person', (req, res) => {
  if (!req.query.names) {
    res.render('randomPerson', { people: false, pickedPerson: false });
  }
  const people = req.query.names.split(',')
  const randomPerson = people[Math.floor(Math.random() * people.length)]
  res.render('randomPerson', { pickedPerson: randomPerson, people });
})

app.get('/fizz_buzz', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const fizzBuzz = [];
  console.log(num1);
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
    res.render('fizzBuzz', { fizzBuzz });
  }
  for (let i = 1; i <= 100; i++) {
    let string = '';
    if (i % num1 === 0) {
      string += 'fizz'
    }
    if (i % num2 === 0) {
      string += 'buzz'
    }
    if (string.length === 0) {
      string += i
    }
    fizzBuzz.push(string);
  }
  res.render('fizzBuzz', { fizzBuzz });
})

app.get('/directory_lister', (req, res) => {
  fs.readdir(__dirname)
    .then(files => {
      res.render('directoryListener', { files });
    })
    .catch(err => {
      res.send(`Error happend! Sorry ): ${err}`);
    })
});

const PORT = 8080;
const ADDRESS = '127.0.0.1';

app.listen(PORT, ADDRESS, () => {
  console.log(`Express Application listening on ${ADDRESS}:${PORT}`);
});

