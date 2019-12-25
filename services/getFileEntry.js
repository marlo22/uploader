const dbConnection = require('../db/connection');

module.exports = function getFileEntry({ fileId }) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM `files` WHERE file_id = ?';

    dbConnection.query(sql, [fileId], (err, result) => {
      if (err) reject(err);

      resolve(result[0]);
    });
  });
};