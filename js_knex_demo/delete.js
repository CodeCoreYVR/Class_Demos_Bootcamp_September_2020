const knex = require('./db/client');
// Delete One Post
if (false) {
    knex('posts')
        .where("id", 4)
        .del()
        .then(result => {
            console.log(result);
            knex.destroy();
        })
}
// Delete all posts but one
const deleteQuery = knex("posts")
    .where("id", "!=", "1")
    .del();

console.log(deleteQuery.toString());

deleteQuery.then(result => {
    console.log("deleteQuery: ", deleteQuery);
    console.log("result: ", result);
    knex.destroy();
});