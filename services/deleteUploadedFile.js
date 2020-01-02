const fs = require('fs');

module.exports = async function deleteUploadedFile({ fileName }) {
  return new Promise((resolve, reject) => {
    fs.unlink(`${process.env.UPLOAD_DIRECTORY}/${fileName}`, err => err ? reject(err) : resolve());
  });
};