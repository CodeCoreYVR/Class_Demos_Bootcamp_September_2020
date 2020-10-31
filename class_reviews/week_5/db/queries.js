const knex = require("./client") // establish the connection with our db

module.exports = {
  // returns an array of todo objects, each object being a row in the db,
  // and each key/value pair being a column/field
  index() {
    return knex.select().table('todos')
  },

  // The "todo" param will be an object, representing the form data from the request body
  // passing in "*" as a 2nd arg to insert() will return that todo object after
  // inserting it into the db
  createTodo(todo) {
    return knex("todos").insert(todo, "*")
  },
  destroy() {
    knex.destroy()
  }
}