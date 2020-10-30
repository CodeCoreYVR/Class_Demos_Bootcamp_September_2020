1. Initalize a git project (make sure you're not currently inside of a git repo)
  * git status 
    * fatal: not a git repository
  * mkdir project
  * cd project
  * git init
  * echo 'node_modules/\n.DS_Store' > .gitignore
  * Generate package.json
    * npm init -y
    * npm init
  * git add -A
  * git commit -m "Initial commit"