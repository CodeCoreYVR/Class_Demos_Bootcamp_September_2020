const { truncate } = require('./db/client');
const knex = require('./db/client'); // used for connection
if (false) {
    knex
        .select('*') // "*" is a wild card to say select all
        .from('posts') // passing name of the table
        .then(
            data => { // data will be returned from the promise (asynchronous) function
                console.log(data);
                knex.destroy();
            }
        );
}
if(false){
    knex
    .select('title','content')
    .from("posts")
    .then(result=>{
        console.log(result);
        knex.destroy();
    })

}
// Select with Filters


// Where clause with %% - wildcards and ilike
if(true){
    const queryString=knex
    .select('title','content')
    .from("posts")
    .where('title','ilike','%rs%'); // % is again a wild card used as filter and it means title having 'rs' in middle will be fetched
    
    console.log(queryString.toString());
    queryString.then(result=>{
        console.log(result);
        knex.destroy();
    })
}
// limit and offset - We use this for pagination
if(false){
    knex
    .select('title','content')
    .from("posts")
    .limit(5)
    .offset(2)
    .then(result=>{
        console.log(result);
        knex.destroy();
    })
}

//Raw SQL in select
if(false){
    knex
    .select("*")
    .from("posts")
    .whereRaw(`title ilike ? and content ilike ?`,['T%','%.'])
    // .whereRaw(`title ilike ?`,["T%"])
    // .whereRaw(`title ilike 'T%' and content ilike '%.'`)

    .then(result=>{
        console.log(result);
        knex.destroy();
    })
}

// Aggregate Functions
if(false){
    knex
    .count({postcount: "*"})
    .avg({ averageViews: "views"})
    .max("views as highestViewCount")
    .from('posts')
    .then(result=>{
        console.log(result);
        knex.destroy();
    })

}