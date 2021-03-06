const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.DB_URL;

const pool = new Pool({
  connectionString: "postgres://eqlvfmzp:w8jvvUkvE0rNj4hEMY94UsNKz9s5GkE-@fanny.db.elephantsql.com/eqlvfmzp",
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);

    return pool.query(text, params, callback);
  },
};