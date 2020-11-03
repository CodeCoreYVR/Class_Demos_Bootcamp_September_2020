// db/client.js

const environment=process.env.NODE_ENV || "development"; // set the environment
const knex=require('knex'); // please add this line in client.js

//production
//staging

const config=require("../knexfile"); //load exported configs from the knexfile.js

const environmentConfig=config[environment]; // grab the environment you want to connect

const connection=knex(environmentConfig);
// and finally: export the connections
module.exports=connection;

