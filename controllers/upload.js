const express = require('express');
const saveUploadedFile = require('../services/saveUploadedFile');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads');
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

router.get('/upload/:fileId', [getLastAddedFiles, getTopDownloads], async (req, res) => {
  try {
    const { fileId } = req.params;
    const fileEntry = await getFileEntry({ fileId });

    if (!fileEntry) return res.sendStatus(404);
  
    const {
      id,
      delete_code: deleteCode,
      file_name: fileName,
      is_private: isPrivate
    } = fileEntry;
    const fileDownloadUrl = `${getHostUrl(req)}/download/${id}`;
  
  
    res.render('uploadSummary', {
      deleteCode,
      fileName,
      isPrivate,
      fileDownloadUrl
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;