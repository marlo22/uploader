const getFileEntry = require('../services/getFileEntry');

module.exports = async function validateDeleteCode({ id, deleteCode }) {
  try {
    const { delete_code: fileDeleteCode } = await getFileEntry({ id });

    if (deleteCode === fileDeleteCode) return true;

    return false;
  } catch (err) {
    throw err;
  }
}