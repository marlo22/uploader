const uuid = require('uuid');
const checkUploadDirectory = require('../helpers/checkUploadDirectory');
const getExtensionFromFileName = require('../helpers/getExtensionFromFileName');
const addFileEntryToDb = require('./addFileEntryToDb');

module.exports = function saveUploadedFile({ file, isPrivate, res }) {
  checkUploadDirectory();

  const { name: fileName } = file;
  const fileId = uuid();
  const ext = getExtensionFromFileName(fileName);

  file.mv(`${process.env.UPLOAD_DIRECTORY}/${fileId}.${ext}`, async err => {
    if (err) return res.status(500).send(err);

    await addFileEntryToDb({
      fileId,
      fileName,
      isPrivate
    });

    res.sendStatus(201);
  });
};