const dbConnection = require('../db/connection');

module.exports = function addFileEntryToDb({ fileId, fileName, isPrivate, deleteCode }) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO `files` (`file_id`, `file_name`, `is_private`, `delete_code`) VALUES (?, ?, ?, ?)';

    dbConnection.query(sql, [fileId, fileName, isPrivate, deleteCode], err => {
      return err ? reject(err) : resolve();
    });
  });
}