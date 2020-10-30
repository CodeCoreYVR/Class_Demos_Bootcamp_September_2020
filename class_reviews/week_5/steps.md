1. Initalize a git project (make sure you're not currently inside of a git repo)
  * git status 
    * fatal: not a git repository
  * mkdir project
  * cd project
  * git init
  * Add .gitignore
    * Use gitignore.io or the command below
    * echo 'node_modules/\n.DS_Store' >> .gitignore (appends to end of file)
    * echo 'node_modules/\n.DS_Store' > .gitignore (overwrites the file)
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
