const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads');

const router = express.Router();

router.get('/policy', [getLastAddedFiles, getTopDownloads], (req, res) => {
  res.render('policy', { subtitle: 'regulamin' });
});

module.exports = router;