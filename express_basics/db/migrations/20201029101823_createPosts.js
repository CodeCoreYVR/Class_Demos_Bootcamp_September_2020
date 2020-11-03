
exports.up = function(knex) {
  return knex.schema.createTable("posts",(table)=>{
      table.increments("id"); // create an auto incrementing column named id
      table.string("title"); // Add column named as "title" VARCHAR(255)
      table.text("content"); // Content: TEXT
      table.string("imageUrl") // 
      table.integer("viewCount");
      table.string("tags");
      table.timestamp("createAt").defaultTo(knex.fn.now()); // createdAt timestamp default it to now
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts")
};
