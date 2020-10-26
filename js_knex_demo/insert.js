const knex = require('./db/client'); // establishing connection with DB
if (false) {
    knex.insert({
            title: 'first post', // entering the data to first column title
            content: 'our first post' // entering the data to second column content
        })
        .into('posts')
        .then(result => {
            console.log(result);
            // knex.destroy();// Closing or destroying commection with db
        })
}

if (true) {
    knex.insert([{
                title: 'Top 10 bugs',
                content: "spider, ant,moth, computerBug",
                views: 5
            },
            {
                title: 'Top 5 Schools',
                content: "Hogwarts, codecore, Loma Linda, etc",
                views: 7
            },
            {
                title: "Top 3 Rocks",
                content: "diamond, ruby, amethyst.",
                views: 2
            }
        ])
        .into("posts")
        .then(result => {
            console.log(result);
            knex.destroy();
        })
}

// From Repl:
// k.insert({title:'from repl', content:'from repl-content'}).into('posts').then((result)=>console.log(result))