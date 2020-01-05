const getLastAddedFilesService = require('../services/getLastAddedFiles');

module.exports = async function getLastAddedFiles(req, res, next) {
  try {
    const lastAddedFiles = await getLastAddedFilesService();
    res.locals.lastAddedFiles = lastAddedFiles;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
}