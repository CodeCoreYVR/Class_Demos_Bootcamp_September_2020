// Update with your config settings.

// For this file, we'll need two packages:
// npm i pg knex

// Generate this knexfile.js
// knex init

// Create a db on your machine using postgres:
// createdb --echo name_of_database

// Drop a db on your machine using postgres:
// dropdb --echo name_of_database

// List all knex commands:
// knex

// Create migrations:
// name_of_migration_file should describe what the migration does
// knex migrate:make name_of_migration_file

// Run migrations that were not run yet:
// knex migrate:latest

// Reverse last set of migrations (exports.down):
// knex migrate:rollback

module.exports = {
  development: {
    // tell knex that our client is postgres
    // "pg" is the package we installed using npm to connect to our database
    client: 'pg', 
    connection: {
      database: 'todo_list_development', // tell knex to use this database
      // These fields are required for linux:
      // To set a password for your user,
      // $ psql
      // user=# \password
      // username: "you name",
      // password: "supersecret"
    },
    migrations: { // make sure this object is inside of "development" object
      // Migrations are JS files that have queries to build the 
      // structure of your db such as creating/dropping table, modifying columns, etc...
      tableName: "migrations",
      directory: 'db/migrations', // tell knex that our migration files are here
    }
  },
};
