const knex = require('./db/client');
if (false) {
    knex
        .select('*')
        .from('countries')
        .then(data => {
            console.log(data);
            knex.destroy();
        })

}
// Find all countries whose names begin with "b" ignoring case.
if (false) {
    const query1 = knex
        .select('*')
        .from('countries')
        .where('name', 'ilike', 'b%');
    console.log(query1.toString());
    // select * from "countries" where "name" ilike 'b%'
    query1.then(
        countries => {
            console.log(countries);
            knex.destroy();
        }
    );
}

// Count how many countries have "united" in their name.
if (false) {

    const query2 = knex('countries')
        .count('* as count')
        .where('name', 'ilike', '%united%');
    console.log(query2.toString());
    // select count(*) as "count" from "countries" where "name" ilike '%central%'
    query2.then(count => {
        console.log(count)
        knex.destroy();
    });
}
// Find all countries whose names begin with the same three letters as their code ignoring case.
if(true){
const query3 = knex
  .select('*')
  .from('countries')
  .whereRaw(`"name" ilike "code" || '%'`);
console.log(query3.toString());
// select * from "countries" where "name" ilike "code" || '%'
query3.then(countries => console.log(countries));
}