module.exports = function getExtensionFromFileName(fileName) {
  const splitted = fileName.split('.');
  return splitted[splitted.length - 1];
};