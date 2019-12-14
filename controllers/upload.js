const express = require('express');
const saveUploadedFile = require('../services/saveUploadedFile');

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

module.exports = router;