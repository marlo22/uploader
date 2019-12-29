module.exports = function getFileSize(path) {
  const fs = require('fs');
  
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) reject(err);

      const bytesInMb = 1000000;
      const fileSizeInMb = (stats.size / bytesInMb).toFixed(2);
      resolve(fileSizeInMb);
    });
  });
}