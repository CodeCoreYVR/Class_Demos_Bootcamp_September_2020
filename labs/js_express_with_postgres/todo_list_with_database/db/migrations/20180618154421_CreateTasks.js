exports.up = function(knex, Promise) {
  return knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.text("title");
    table.string("test");
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tasks");
};
