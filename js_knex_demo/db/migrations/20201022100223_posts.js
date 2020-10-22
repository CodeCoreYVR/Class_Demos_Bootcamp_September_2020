// Creating migration : knex migrate:make posts
// Running Migration : knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable('posts', table=>{
      table.bigIncrements('id');// Creates a column called id which is a number that will auto increment
      table.string('title');//creates a column called title with type of string 
      table.text('content');//creates a column called content with the type of text 
      table.timestamp('createdAt').defaultTo(knex.fn.now());//this creates a column called createdAt with the type of timestamp which  will also defaul to the current time at transaction

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
  
};
