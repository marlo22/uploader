const getFileEntry = require('./getFileEntry');
const dbConnection = require('../db/connection');

module.exports = function increaseDownloadCounter(id) {
  return new Promise(async (resolve, reject) => {
    const { download_counter: counter } = await getFileEntry({ id });
    const newCounter = counter + 1;

    const sql = 'UPDATE `files` SET `download_counter` = ? WHERE `id` = ?';
    dbConnection.query(sql, [newCounter, id], err => err ? reject(err) : resolve());
  });
};