const express = require('express');
const path = require('path');
const getFileEntry = require('../services/getFileEntry');

const router = express.Router();

router.get('/download/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const fileEntry = await getFileEntry({ id });

    if (!fileEntry) return res.sendStatus(404);

    const {
      file_id: fileId,
      file_name: fileName,
      file_ext: fileExt
    } = fileEntry;
  
    res.download(`files/${fileId}.${fileExt}`, fileName);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;