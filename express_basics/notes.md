ExpressJS

Express is a web framework for nodeJS
It allows us to quickly build a lightweight web appication
Documentation: http://expressjs.com/

NPM - Node Package Manger
This application has an ecosystem of libraries and packages made by other people for NodeJS (including ExpressJS)

To install a package- make sure you're in your project directory (directory with a package.json file)

To install express:
run in terminal `npm install express --save`

package-lock.json file corresponds to the package.json file
This file shows all the packages installed and their versions for this project

node_modules is the folder that contains all the source code for all the libraries that have been installed for the project. DO NOT COMMIT THIS FILE

If you need to install all your dependencies again... run `npm i` to install everything listed as a dependency within the package.json file

The main key within package.json refers to the root file for the project. Your main file and the value of the key should be the same