const knex=require('./db/client');

knex('posts')
.where("id",4)
.del()
.then(result=>{
    console.log(result);
    knex.destroy();
})