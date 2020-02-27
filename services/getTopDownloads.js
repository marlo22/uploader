const { query } = require('../db');

const resultsLimit = Number(process.env.SIDEBAR_TOP_DOWNLOADS_LIMIT);

module.exports = function getTopDownloads({ limit = resultsLimit } = {}) {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT id, file_name, download_counter
      FROM files
      WHERE is_private = false
      ORDER BY download_counter
      DESC LIMIT $1;
    `;

    query(sql, [limit], (err, results) =>
      err ? reject(err) : resolve(results.rows)
    );
  });
}