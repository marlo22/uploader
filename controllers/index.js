const express = require('express');
const getTopDownloads = require('../middlewares/getTopDownloads');

const router = express.Router();

router.get('/', getTopDownloads, (req, res) => {
  res.cookie('FILE_MAX_SIZE', process.env.FILE_MAX_SIZE);
  res.cookie('FILE_ALLOWED_FORMATS', process.env.FILE_ALLOWED_FORMATS);

  res.render('index', {
    path: req.path,
    subtitle: 'dodaj plik',
    maxFileSize: process.env.FILE_MAX_SIZE,
    allowedFileFormats: process.env.FILE_ALLOWED_FORMATS
  });
});

module.exports = router;