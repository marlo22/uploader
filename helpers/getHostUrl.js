module.exports = function getHostUrl(req) {
  const { protocol } = req;
  const host = req.get('host');

  return `${protocol}://${host}`
}