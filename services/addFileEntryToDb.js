const { query } = require('../db');

module.exports = function addFileEntryToDb({ id, fileId, fileName, fileExt, isPrivate, deleteCode }) {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO files (id, file_id, file_name, file_ext, is_private, delete_code) VALUES ($1, $2, $3, $4, $5, $6);";

    query(sql, [id, fileId, fileName, fileExt, isPrivate, deleteCode], err =>
      err ? reject(err) : resolve()
    );
  });
}