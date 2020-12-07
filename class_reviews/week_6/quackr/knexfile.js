// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'quackr_development'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    }
  },
};
