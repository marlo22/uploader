const dbConnection = require('../db/connection');

module.exports = function addFileEntryToDb({ id, fileId, fileName, fileExt, isPrivate, deleteCode }) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO `files` (`id`, `file_id`, `file_name`, `file_ext`, `is_private`, `delete_code`) VALUES (?, ?, ?, ?, ?, ?)';

    dbConnection.query(sql, [id, fileId, fileName, fileExt, isPrivate, deleteCode], err => {
      return err ? reject(err) : resolve();
    });
  });
}