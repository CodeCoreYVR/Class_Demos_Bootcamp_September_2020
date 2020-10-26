const knex = require('./db/client');
if (false) {
    knex('posts')
        .where('id', 5)
        .update({
            title: 'So many views',
            views: 1000
        })
        .then((result => {
            console.log(result);
            knex.destroy();
        }))
}

if (true) {
    knex('posts')
        .where('id', "<=", "5")
        .update({
            title: "sparkled"
        }).then(
            data => {
                console.log(data);
                knex.destroy();
            }
        )
}