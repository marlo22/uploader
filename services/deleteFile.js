const validateDeleteCode = require('../services/validateDeleteCode');
const getFileEntry = require('../services/getFileEntry');
const deleteUploadedFile = require('../services/deleteUploadedFile');
const deleteFileEntryFromDb = require('../services/deleteFileEntryFromDb');

module.exports = async function deleteFile({ id, deleteCode }) {
  try {
    const isDeleteCodeValid = await validateDeleteCode({ id, deleteCode });
  
    if (!isDeleteCodeValid) return false;

    const fileEntry = await getFileEntry({ id });

    if (!fileEntry) return false;

    const {
      file_id: fileId,
      file_ext: fileExt
    } = fileEntry;
    const fileName = `${fileId}.${fileExt}`;
  
    await deleteUploadedFile({ fileName });
    await deleteFileEntryFromDb({ id });

    return true;
  } catch (err) {
    throw new Error(err);
  }
};