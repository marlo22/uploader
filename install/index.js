require('dotenv').config();

const { query } = require('../db');
const { promises: fs } = require('fs');

async function loadSql() {
  const sql = await fs.readFile(`${__dirname}/init.sql`);
  return sql.toString();
}

async function checkInstallation() {
  return new Promise(resolve => {
    query('SELECT * FROM files', err => {
      if (err) resolve(false);

      query('SELECT * FROM download_logs', err => {
        if (err) resolve(false);
        resolve(true);
      });
    });
  });
};

async function initDb() {
  const sql = await loadSql();

  query(sql, err => {
    if (err) throw err;

    console.log('Database initialized correctly!');
    process.exit();
  });
};

checkInstallation()
  .then(isInitialized => {
    if (isInitialized) {
      console.log('Application is already initialized.');
      process.exit();
    }

    initDb();
  });
