const { query } = require('../db');

module.exports = function getLastAddedFiles({ limit = 5 } = {}) {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT id, file_name
      FROM files
      ORDER BY upload_date DESC
      LIMIT $1;
    `;

    query(sql, [limit], (err, results) =>
      err ? reject(err): resolve(results.rows)
    );
  });
};