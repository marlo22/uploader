const dbConnection = require('../db/connection');

module.exports = function deleteFileEntryFromDb({ id }) {
  return new Promise(async (resolve, reject) => {
    const sql = 'DELETE FROM `files` WHERE `id` = ?';
    dbConnection.query(sql, [id], err => {
      if (err) reject(err);

      resolve(true);
    });
  });
};