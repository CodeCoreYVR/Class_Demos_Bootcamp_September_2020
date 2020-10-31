const express = require("express")
const knex = require("../db/queries") // object of knex queries

// "Router" created is part of the Express library and is used
// for routing. It allows us to seperate our routes into different files.
const router = express.Router()

// All paths passed to these routes start with "/todos/"

// GET "/todos"
router.get("/", (req, res) => {
  // knex queries are asynchronous because it takes time to read/write to a db
  // We can handle that data with promises
  // using .then(), we can render a view only after the read has finished
  // then you can use this data in your view

  knex // query object from queries.js
    .index() // returns an array of every todo in our db wrapped in a promise
    .then(data => { // after our data comes back, send a response to the client

      res.send(data)
    })
})

// GET "/todos/new"
router.get("/new", (req, res) => {
  res.render("new")
})

// POST "/todos" 
router.post("/", (req, res) => {
  // req.body contains data from the form
  // it's only available if we parsed it with the express.urlencoded() middleware
  req.body.username = "Anson"
  // res.send(req.body)
  knex // knex queries object
    .createTodo(req.body) // make the db insertion
    .then(data => { // data is an [] of all todos inserted because we returned "*"
      
      res.redirect(`/todos/${data[0].id}`)
    
      // res.send(data)      
      knex.destroy() // destroy connection
    })
})

// /:id is a wildcard match
// e.g. "/todos/3" => :id is "3"
// We can access the value of 3 from the url with this wildcard from req.params.id
router.get("/:id", (req, res) => {
  res.send(req.params)
})

module.exports = router