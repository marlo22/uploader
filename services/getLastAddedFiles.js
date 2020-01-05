const dbConnection = require('../db/connection');

module.exports = function getLastAddedFiles({ limit = 5 } = {}) {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT id, file_name
      FROM files
      ORDER BY upload_date DESC
      LIMIT ?;
    `;

    dbConnection.query(sql, [limit], (err, results) =>
      err ? reject(err): resolve(results)
    );
  });
};