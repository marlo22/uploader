const express = require('express');
const getTopDownloads = require('../middlewares/getTopDownloads'); 
const getFileEntry = require('../services/getFileEntry');
const increaseDownloadCounter = require('../services/increaseDownloadCounter');
const { formatDate } = require('../helpers/formatDate');
const getFileSize = require('../helpers/getFileSize');

const router = express.Router();

router.get('/download/:id', getTopDownloads, async (req, res) => {
  const { id } = req.params;

  try {
    const fileEntry = await getFileEntry({ id });

    if (!fileEntry) return res.sendStatus(404);

    const {
      file_id: fileId,
      file_name: fileName,
      file_ext: fileExt,
      upload_date: uploadDate,
      download_counter: downloadCounter
    } = fileEntry;
    const fileSize = await getFileSize(`${process.env.UPLOAD_DIRECTORY}/${fileId}.${fileExt}`);
  
    res.render('download', {
      id,
      fileName,
      fileSize,
      uploadDate: formatDate(new Date(uploadDate)),
      downloadCounter
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/download/:id/get', async (req, res) => {
  const { id } = req.params;

  try {
    const fileEntry = await getFileEntry({ id });
  
    if (!fileEntry) return res.sendStatus(404);
  
    const {
      file_id: fileId,
      file_name: fileName,
      file_ext: fileExt
    } = fileEntry;

    await increaseDownloadCounter(id);
    res.download(`${process.env.UPLOAD_DIRECTORY}/${fileId}.${fileExt}`, fileName);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;