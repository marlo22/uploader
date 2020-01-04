const express = require('express');
const getTopDownloads = require('../middlewares/getTopDownloads'); 
const deleteFile = require('../services/deleteFile');

const router = express.Router();

router.get('/remove', getTopDownloads, (req, res) => {
  res.render('remove');
});

router.post('/remove', async (req, res) => {
  const { id, deleteCode } = req.body;

  try {
    const deleteSuccess = await deleteFile({ id, deleteCode });
    const status = deleteSuccess ? 'success' : 'failed';

    res.render('remove', { status });
  } catch (err) {
    throw err;
  }
});

module.exports = router;