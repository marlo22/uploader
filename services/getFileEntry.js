const { query } = require('../db');

module.exports = function getFileEntry({ id, fileId }) {
  return new Promise((resolve, reject) => {
    const by = id ? 'id' : 'file_id';
    const sql = `SELECT * FROM files WHERE ${by} = $1;`;

    query(sql, [id || fileId], (err, result) => {
      if (err) reject(err);

      resolve(result.rows[0] || {});
    });
  });
};