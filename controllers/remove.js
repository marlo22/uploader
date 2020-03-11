const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads'); 
const deleteFile = require('../services/deleteFile');
const getLocales = require('../middlewares/getLocales');
const getSubtitleFromLocale = require('../helpers/getSubtitleFromLocale');

const router = express.Router();

router.get('/remove', [getLastAddedFiles, getTopDownloads, getLocales], (req, res) => {
  res.render('remove', { subtitle: getSubtitleFromLocale('removeFile') });
});

router.post('/remove', [getLastAddedFiles, getTopDownloads, getLocales], async (req, res) => {
  const { id, deleteCode } = req.body;

  try {
    const deleteStatus = await deleteFile({ id, deleteCode });
    const status = deleteStatus ? 'success' : 'failed';

    res.render('remove', { status });
  } catch (err) {
    throw err;
  }
});

module.exports = router;