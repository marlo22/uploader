const { Pool } = require('pg');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = new Pool({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT
});

module.exports = {
  query: (text, params, callback) => 
    pool.query(text, params, callback)
};
