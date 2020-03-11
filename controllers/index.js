const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads');
const getLocales = require('../middlewares/getLocales');
const getSubtitleFromLocale = require('../helpers/getSubtitleFromLocale');

const router = express.Router();

router.get('/', [getLastAddedFiles, getTopDownloads, getLocales], (req, res) => {
  res.cookie('FILE_MAX_SIZE', process.env.FILE_MAX_SIZE);
  res.cookie('FILE_ALLOWED_FORMATS', process.env.FILE_ALLOWED_FORMATS);

  res.render('index', {
    path: req.path,
    subtitle: getSubtitleFromLocale('addFile'),
    maxFileSize: process.env.FILE_MAX_SIZE,
    allowedFileFormats: process.env.FILE_ALLOWED_FORMATS
  });
});

module.exports = router;