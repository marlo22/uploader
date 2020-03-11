module.exports = async function getLocales(req, res, next) {
  res.locals.appName = process.env.APP_NAME;
  res.locals.locales = require(`../translations/${process.env.LANGUAGE}`);
  next();
}