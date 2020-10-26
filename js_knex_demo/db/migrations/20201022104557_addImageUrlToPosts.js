// Creating this Migration:knex migrate:make addImageUrlToPosts
exports.up = function(knex) {
    //👇🏻Adding Column: "views" as integer and "imageUrl" as string to posts table. We will no use create table as table is already there.
  return knex.schema.table('posts',(table)=>{
      table.string('imageUrl');// 
      table.integer('views');
  })
};

exports.down = function(knex) {
    // we will use dropColumn to remove columns from table
    return knex.schema.table('posts', table=>{
        table.dropColumn('imageUrl');
        table.dropColumn('views');
    })
  
};
