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

/**
 * Hàm này trả về tổng doanh thu
 */
Report.getRevenue = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spGetReportRevenue(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

/**
 * Hàm này trả về các điểm đến theo thời gian
 */
Report.getDestinationByTime = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spGetReportDestinationByTime(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Report;
