const dbConnection = require('../db/connection');

module.exports = function getFileEntry({ id, fileId }) {
  return new Promise((resolve, reject) => {
    const by = id ? 'id' : 'file_id';
    const sql = `SELECT * FROM \`files\` WHERE ${by} = ?`;

    dbConnection.query(sql, [id || fileId], (err, result) => {
      if (err) reject(err);

      resolve(result[0] || {});
    });
  });
};