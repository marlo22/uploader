const fs = require('fs');

module.exports = function checkUploadDirectory() {
  const { UPLOAD_DIRECTORY } = process.env;

  if (!fs.existsSync(UPLOAD_DIRECTORY)) {
    fs.mkdirSync(UPLOAD_DIRECTORY);
  }
};