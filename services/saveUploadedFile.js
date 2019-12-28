const uuid = require('uuid');
const checkUploadDirectory = require('../helpers/checkUploadDirectory');
const getExtensionFromFileName = require('../helpers/getExtensionFromFileName');
const generateDeleteCode = require('../helpers/generateDeleteCode');
const addFileEntryToDb = require('./addFileEntryToDb');

module.exports = function saveUploadedFile({ file, isPrivate, res }) {
  checkUploadDirectory();

  const { name: fileName } = file;
  const id = uuid();
  const fileId = uuid();
  const deleteCode = generateDeleteCode();
  const fileExt = getExtensionFromFileName(fileName);

  file.mv(`${process.env.UPLOAD_DIRECTORY}/${fileId}.${fileExt}`, async err => {
    if (err) return res.status(500).send(err);

    await addFileEntryToDb({
      id,
      fileId,
      fileName,
      fileExt,
      isPrivate,
      deleteCode
    });

    res.redirect(`upload/${fileId}`);
  });
};