const dbConnection = require('../db/connection');

module.exports = function addFileEntryToDb({ fileId, fileName, isPrivate }) {
  return new Promise((resolve, reject) => {
    dbConnection.connect();

    const sql = 'INSERT INTO `files` (`file_id`, `file_name`, `is_private`) VALUES (?, ?, ?)';

    dbConnection.query(sql, [fileId, fileName, isPrivate], err => {
      dbConnection.end();
      return err ? reject(err) : resolve();
    });
  });
}