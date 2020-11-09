exports.up = function(knex) {
  return knex.schema.createTable("quacks", table => {
    table.bigIncrements("id")
    table.string("username")
    table.text("img_url")
    table.text("content")
    table.timestamp("createdAt").defaultTo(knex.fn.now())
    table.timestamp("updatedAt")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("quacks")
};
