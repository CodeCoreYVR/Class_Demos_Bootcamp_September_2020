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
  