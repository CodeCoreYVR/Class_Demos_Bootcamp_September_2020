1. Initalize a git project (make sure you're not currently inside of a git repo)
  * Make sure you're not in a git repo already
    * git status 
    * fatal: not a git repository
  * mkdir project
  * cd project
  * git init
  * Add .gitignore
    * Use gitignore.io or the command below
    * echo 'node_modules/\n.DS_Store' >> .gitignore (appends to end of file)
    * echo 'node_modules/\n.DS_Store' > .gitignore (overwrites the file)
2. Initialize node project
  * Generate package.json
    * npm init -y
    * npm init
  * git add -A
  * git commit -m "Initial commit"
  * After making initial commit, branch off and push your solution commits to that branch
    * git checkout -b "solution"
  * Install dependecies
    * npm i express morgan ejs pg method-override cookie-parser knex
    * npm i --save-dev nodemon
  * Add scripts
  ```
  "scripts": {
    "start": "nodemon app.js",
    "db:create": "createdb --echo todo_list_development",
    "db:drop": "dropdb --if-exists --echo todo_list_development",
    "db:migrate": "knex migrate:latest",
    "db:rollback": "knex migrate:rollback",
    "db:reset": "npm run db:drop && npm run db:create && npm run db:migrate"
  },
  ```
3. Initialize knex
  * knex init (generate knexfile.js)
  * modify knexfile.js
    * Remove staging and production
    * Change client to "pg" 
    * Specify database name in development.connection.database
      * Add username and password if you're on Linux
    * Specify path to migration files in development.migrations.directory
    * Specify tableName that knex uses to keep track of migrations run in development.migrations.tableName
  * Create database on your machine
    * npm run db:create 
    * or
    * createdb --echo name_of_database
    * The name_of_database has to be the same as the database name specifed in knexfile.js
  * Create a todos table in name_of_database
    * knex migrate:make createTodos (might need to create db directory first)
    * modified exports.up and exports.down in migration file
    * npm run db:migrate or knex migrate:latest
      * After running migrations, do not modify the migration files
      * Run npm run db:rollback instead or make another change using a new migration
4. Express application
  * Our start script with nodemon should start the entry point of our app defined in "main" inside of package.json.
  * We'll make "app.js" is the entry point for this project.
  * Require packages:
  ```
    const express = require("express")
    const path = require("path")
    const logger = require("morgan")
    const cookieParser = require("cookie-parser")
    const methodOverride = require("method-override")
  ```
  * Initialize express app:
  ```
    const app = express()
  ```
  * Set view engine:
  ```
    app.set("view engine", "ejs")
  ```
  * Use middleware:
  ```
    app.use(logger('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, 'public')))
  ```
  * Create server using app.listen()
5. Home Page
  * mkdir -p views/partials
  * create header.ejs and footer.ejs inside of partials
  * Download bootstrap or add a CDN to the header and footer partials
    * If you download:
      * mkdir -p public/stylesheets
      * mkdir -p public/javascripts
  * Create home.ejs inside of "views"
  * Add a route handler to render the home page view when the client makes a GET request to "/"
  ```
    app.get("/", (req, res) => {
        res.render("home")
    })
  ```
6. Todos Router
  * mkdir routes
  * create router called todos.js inside of routes/
  * make a Router
  ```
    const router = require("express").Router()
  ```
  * add routes to this file handling all types of requests
  * at the end of the file, export the router
  * Back in app.js, require the todosRouter, specifying the path to todos.js
  * Use it as a routing middleware
  ```
    const todosRouter = require("./routes/todos")
    app.use("/todos", todosRouter)
  ```
7. Create our knex connection
  * touch db/client.js
  * import config and load knex:
  ```
    const config = require("../knexfile")
    const knex = require("knex")
  ```
  * Export the connection by passing in the dev config to knex():
  ```
    module.exports = knex(config.development)
  ```
8. Create knex queries
  * touch db/queries.js
  * import the knex connection
  ```
    const knex = require("./client")
  ```
  * create and export an object with methods that make queries
9. Todos Index (GET "/todos")
  * Use knex to get every row (instance) of a todo from the todos table
  * loop through the data that comes back and render a view for every todo
  * call knex.index() (or whatever you called the method inside of queries)
  * call .then() on the promisfied array that you get back from knex, and render a index view
    * Create index.ejs in views
    * Pass the array of todos data to our view
10. New Todo (GET "/todos/new")
  * Create a view called new.ejs inside of views
  * Make a form which POSTS the data to "/todos" when you submit
  * Add a route handler in the todosRouter that renders this view
11. Create Todo (POST "/todos")
  * Add knex query to insert a todo in our db
  * After inserting, redirect to the todo's show page
    * Create a view called show.ejs inside of views
12. Show Todo
  * Find the id of the todo in the url params
  * Add knex query to find a specfic todo from our db with that id
  * render the show view with that todo object
13. Add NavBar
  * Links to Home, Todos Index, Nee Todo Form
  * Add links to each todo in the index that will take you to the show page
    * You have access to each id in the todo, so you can make a GET to todo/:id
14. Setup Method Override
  * Add middleware
  * docs: https://www.npmjs.com/package/method-override#custom-logic
15. Delete a todo
  * Wrap the delete button in a form to make a DELETE request
  * Add a hidden input to add { _method: name_of_http_verb } to the req.body
  * Add a route handler for DELETE /todos/:id
  * Create a knex query to delete that todo with that id

### Summary of REST
  * GET "/todos" => renders index page of all todos
  * GET "/todos/:id" => renders show page of todo with the id in the param
  * GET "/todos/new" => renders form for creating a todo
  * POST "/todos" => insert the todo in the db