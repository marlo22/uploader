require('dotenv').config();

const { query } = require('../db');
const { promises: fs } = require('fs');

async function loadSql() {
  const sql = await fs.readFile(`${__dirname}/init.sql`);
  return sql.toString();
}

async function initDb() {
  const sql = await loadSql();

  query(sql, err => {
    if (err) throw err;

    console.log('Database initialized correctly!');
    process.exit();
  });
};

initDb();
