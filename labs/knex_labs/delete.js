const knex = require('./db/client');
knex('countries').del().then(data=>{
    console.log(data);
    knex.destroy();
});