const { query } = require('../db');

module.exports = async function search({ keyword, limit, offset }) {
  return new Promise((resolve, reject) => {
    // https://www.altcademy.com/questions/how-to-count-all-rows-in-sql-query-while-using-limit
    const sql = "SELECT *, count(*) OVER() AS total_count FROM files WHERE file_name LIKE $1 LIMIT $2 OFFSET $3;"
    query(sql, [`${keyword}%`, limit, offset], (err, results) => {
      const resultsData = {
        totalResults: results.rows[0] && results.rows[0].total_count || 0,
        rows: results.rows
      };

      return err ? reject(err): resolve(resultsData);
    });
  });
};
