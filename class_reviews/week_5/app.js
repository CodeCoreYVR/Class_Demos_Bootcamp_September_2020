const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")

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