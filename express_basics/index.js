const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
// this middleware will parse x-www-urlencoded data from POST requests
// It will put all the data on the `request.body` property
// extended true option will allow parsing into arrays and objects. Useful when the server recieves data like JSON

app.use(cookieParser()); // parses cookies
// cookie parser middleware will look into the request object and find any cookies
// it will put all cookies on a property called cookies
// we can access parsed cookies using `request.cookies`

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
  console.log(request.cookies);
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

app.get('/sign_in', (request, response) => {
  response.render('signInPage');
})

// HTTP Requests are made up of a HTTP VERB and a PATH
// GET /sign_in is not the same as a POST /sign_in
// Responds to requests made to POST /sign_in
app.post('/sign_in', (request, response) => {
  const username = request.body.username;
  // create cookie
  // reponse.cookie is a method that will create a SET-COOKIE header in the HTTP response
  // The arguments are: 1) name of the key 2) value 3) options object
  const MAX_AGE = 1000 * 60 * 60 * 24 * 7; // A week in milliseconds
  response.cookie('username', username, { maxAge: MAX_AGE }) // make sure you give every cookie a maxAge so they will expire after a set time.
  response.redirect('/'); // tell browser to go to the path /
})

const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Application listening at ${ADDRESS}:${PORT}`);
})
