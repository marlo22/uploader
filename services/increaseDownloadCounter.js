const getFileEntry = require('./getFileEntry');
const { query } = require('../db');

module.exports = function increaseDownloadCounter(id) {
  return new Promise(async (resolve, reject) => {
    const { download_counter: counter } = await getFileEntry({ id }) || {};
    const newCounter = counter + 1;

    const sql = 'UPDATE files SET download_counter = $1 WHERE id = $2';
    query(sql, [newCounter, id], err => err ? reject(err) : resolve());
  });
};