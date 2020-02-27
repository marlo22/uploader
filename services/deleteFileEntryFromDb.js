const { query } = require('../db');

module.exports = function deleteFileEntryFromDb({ id }) {
  return new Promise(async (resolve, reject) => {
    const sql = "DELETE FROM files WHERE id = $1;";
    query(sql, [id], err => {
      if (err) reject(err);

      resolve(true);
    });
  });
};