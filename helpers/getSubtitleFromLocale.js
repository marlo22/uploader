module.exports = function getSubtitleFromLocale(viewKey) {
  const locales = require(`../translations/${process.env.LANGUAGE}`);
  return locales[viewKey].subtitle;
}