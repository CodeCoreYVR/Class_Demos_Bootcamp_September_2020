const knex=require('./db/client');

knex('posts')
.where('id',5)
.update({
    title: 'So many views',
    views:1000
})
.then((result=>{
    console.log(result);
    knex.destroy();
}))