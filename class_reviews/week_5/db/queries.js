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
  create(todo) {
    return knex("todos").insert(todo, "*")
  },

  show(id) {
    return knex("todos")
      .where("id", id) // returns an array of all rows that match
      .first() // only the first object will be returned
  },

  delete(id) {
    return knex("todos")
      .where("id", id)
      .del()
  }
}