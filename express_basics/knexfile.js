// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', // This setting corresponds to the db that we will be using with this project
    connection: {
      database:"express-rest-articles"
      // Linux / ubuntut users would also need this:👇🏻

      // username:"your postgres user_name"
      // password: "supersecret"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:"./db/migrations"
    },
    seeds:{
      directory:"./db/seeds"
    }
  }

};