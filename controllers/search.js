const express = require('express');
const getLastAddedFiles = require('../middlewares/getLastAddedFiles');
const getTopDownloads = require('../middlewares/getTopDownloads');
const search = require('../services/search');

const router = express.Router();

router.get('/search', [getLastAddedFiles, getTopDownloads], async (req, res) => {
  const { keyword, limit, offset } = req.query;

  try {
    const { totalResults, rows } = await search({ keyword, limit, offset });

    res.render('search', {
      subtitle: 'wyszukaj',
      keyword,
      results: rows.map(({ id, file_name }) => ({ id, file_name })),
      totalPages: Math.ceil(totalResults / limit),
      limit: Number(limit),
      offset: Number(offset),
      nextPageUrl: `/search?keyword=${keyword}&limit=${limit}&offset=`
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
