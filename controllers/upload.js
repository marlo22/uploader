const express = require('express');
const saveUploadedFile = require('../services/saveUploadedFile');
const getFileEntry = require('../services/getFileEntry');
const getHostUrl = require('../helpers/getHostUrl');

const router = express.Router();

router.post('/upload', (req, res) => {
  if (!req.files || !Object.keys(req.files).length) {
    res.status(400).send('File not sent!')
  }

  saveUploadedFile({
    file: req.files.file,
    isPrivate: !!req.body.isPrivate,
    res
  });
});

router.get('/upload/:fileId', async (req, res) => {
  const { fileId } = req.params;
  const {
    id,
    delete_code: deleteCode,
    file_name: fileName,
    is_private: isPrivate
  } = await getFileEntry({ fileId });
  const fileDownloadUrl = `${getHostUrl(req)}/download/${id}`;


  res.render('uploadSummary', {
    deleteCode,
    fileName,
    isPrivate,
    fileDownloadUrl
  });
});

module.exports = router;