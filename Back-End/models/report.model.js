const database = require("../dbconnectMySql");

const Report = function(report) {};
const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

/**
 * Hàm này trả về một Promise;
 * resolve - rows SELECT được;
 * reject -  err of sql
 */
Report.getReport = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spGetReport(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Report;
