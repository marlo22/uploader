const getTopDownloadsService = require('../services/getTopDownloads');

module.exports = async function getTopDownloads(req, res, next) {
  try {
    const topDownloads = await getTopDownloadsService();
    res.locals.topDownloads = topDownloads;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
}