const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

// middleware
app.use(logger('dev')); // this is how we'd setup the morgan logger from the docs

app.set('view engine', 'ejs'); // tells express that we are using EJS within our View Templates
app.set('views', 'views'); // tell express that our views live in a directory at /views

// Setup the static asset middleware
// This allows our express server to serve up assets like images, css, videos, sounds from a directory
app.use(express.static(path.join(__dirname, 'public')));

// app is our instance of ExpressJS it is an object that contains methods to create a web server
// documentation for the app object http://expressjs.com/en/4x/api.html#app

// URL
// Uniform Resource Locator

// URL anatomy
// scheme://host:port/path?query

// http://localhost:3000/hello_world?key=value

// http -is the scheme
// :// - seperates the scheme and the host
// localhost - is the host
// :3000 - is the port
// /hello_world - is the path
// ?key=value - is the query

// The important bit for web developers is the PATH a user is accessing
// A path is the location of a resource within an application

// -= ROUTES =-

// HTTP VERBs
// GET - getting a resource
// POST
// PATCH
// DELETE
// PUT
// ect...

// resources are a combination of VERB and PATH ex. GET /hello_world or GET /

// Creates a route for GET /hello_world. This particular route responds with the resource of some html that looks like <div>Hello World</div>;
// app.get is a method that allows us to create a route/path for our application
// arguments are:
// 1) string of the path
// 2) event handler
app.get('/hello_world', (request, response) => {
  // request is a object that contains data about the request
  // response is an object that contains methods to create a response to the request
  response.statusCode = 200;
  response.send('<div>Hello World</div>');
});

// This function will handle the request made to `GET /`
app.get('/', (request, response) => {

  // tell express to render out a view
  // response.render is a method to render a View Template
  // The first argument is a string which is the name of the template file. (omit the extension). We told express the views are inside of the views directory so we can omit that as well.
  response.render('home');
});


// When the user visits /contact_us
// They should recieve a template that has a from that uses input, textarea, checkboxes, and radiobuttons
app.get('/contact_us', (request, response) => {
  // Express parses the url query for us. If we need to access the query of a request we can do so from the request.query property
  console.log(request.query);
  response.render('contact_us');
});

app.get('/thank_you', (request, response) => {
  const query = request.query;
  // query looks like:
  // { fullName: 'brandon', favouriteColour: 'red', message: 'adsfasdfsdafads', day: 'Monday' }
  // the second argument to render method is a locals object.
  // every key within this object becomes a variable that can be accessed within the View Template
  response.render('thank_you', query);
})

const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Application listening at ${ADDRESS}:${PORT}`);
})
