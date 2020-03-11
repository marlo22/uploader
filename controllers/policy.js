const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads');
const getLocales = require('../middlewares/getLocales');
const getSubtitleFromLocale = require('../helpers/getSubtitleFromLocale');

const router = express.Router();

router.get('/policy', [getLastAddedFiles, getTopDownloads, getLocales], (req, res) => {
  res.render('policy', { subtitle: getSubtitleFromLocale('policy') });
});

module.exports = router;