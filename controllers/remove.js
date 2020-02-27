const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads'); 
const deleteFile = require('../services/deleteFile');

const router = express.Router();

router.get('/remove', [getLastAddedFiles, getTopDownloads], (req, res) => {
  res.render('remove');
});

router.post('/remove', [getLastAddedFiles, getTopDownloads], async (req, res) => {
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