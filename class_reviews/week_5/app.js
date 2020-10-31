const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")
const todosRouter = require("./routes/todos")

// Requiring the "express" package returns us a function that 
// creates an instance of the express application when invoked
// app is in an object
const app = express()

// Set our view engine to use ejs
// .set() sets settings to your express app
// first argument is the name of the setting, second is the value
app.set("view engine", "ejs")

// Use middleware:
// Logger:
// When using "morgan", call it with a string that describes
// the formatting of the logs in the console.
// https://github.com/expressjs/morgan
app.use(logger('dev'))

// urlencoded:
// Decodes POST requests coming from HTML forms 
// This middleware comes with express and you call it on express
// You can pass in an object with options
// When the "extended" option is set to true, it allows forms to POST data
// as arrays and objects. If set to false, it only accepts strings.
// In our case, we're just accepting the img_url and content from a todo as a string,
// so we can set it to false.
app.use(express.urlencoded({ extended: false }))

// Cookie parser:
// Parses cookies that come from the client
// Cookies allow us to exchange information about the 
// client because HTTP is stateless
app.use(cookieParser())

// Static assets
// Makes all files and directories inside the specfied path
// accessible by a url beginning from the host
// ./public/sample-image.png => http://localhost:3000/sample-image.png
// __dirname is a global variable available in Node that returns the full
// path beginning from the root. We use path.join() to append "public" to it
// to use this directory to serve our static assets.
app.use(express.static(path.join(__dirname, 'public')))

// Routes:
// First arg is a path from the root of the url path
// "/" is from "http://localhost:3000/"
// Second arg is a callback which takes in the request and response objects as parameters.
// The callback to app.get() is a function (aka route handler) 
// that will send a response back to the client.
// app.get() is named after the http verb of the request
// e.g. GET, POST, PUT, PATCH, DELETE, OPTION

// The "request" is an object that represents the HTTP request made by the client (browser)
// It contains http headers, data, url, http verb, cookies, etc...

// The "response" is an object that represents the server's response to the client
// We modify this object here by calling methods on it. For example, we can
// set headers, send data, send status code (404, 200), etc...
app.get("/", (req, res) => {
  // res.send() takes a string and adds it to the response's body
  // It terminates the request-response cycle
  // res.send("Todo Application")

  // Use "render" to render an HTML file. It sends it in the response and 
  // terminates the request-response cycle.
  // Pass the path to the render method (no need for ejs extension because we already set the view engine to be ejs)
  // The path starts from "views/" by default
  // e.g. res.render("home") => "views/home.ejs"
  // res.render(path-to-ejs-file)
  res.render("home")
})

// Route Middlewares:
// When a request is made to "http://localhost:3000/todos",
// use the router "todos.js" that we created to handle those requests
app.use("/todos", todosRouter)

// Use PORT environment variable if it exists, 
// but if it's undefined then use 3000
const PORT = process.env.PORT || 3000
const ADDRESS = "localhost" // 127.0.0.1
const ENVIRONMENT = app.get('env') // returns from the app config the environment

// The callback will be invoked when our server starts and logs 
// to the console the address which we can click on using Cmd + click
app.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning on http://${ADDRESS}:${PORT} in ${ENVIRONMENT}.`)
})