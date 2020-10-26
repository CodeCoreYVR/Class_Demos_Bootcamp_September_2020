// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      // database: 'name_of_database'
      database:'knex_lect',
      // if you are on linux machine you need this as well👇🏻
      // username: "user",
      // password: "what_ever_is_your_password"

    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    }
  }
};
