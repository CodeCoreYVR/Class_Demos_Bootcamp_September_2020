const express = require('express');
const logger = require('morgan');

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

const PORT = 8080;
const ADDRESS = '127.0.0.1';

app.listen(PORT, ADDRESS, () => {
  console.log(`Express Application listening on ${ADDRESS}:${PORT}`);
});

