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

Report.getReportNumberOfTourists = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spReportNumberOfTourists(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Report.getYearFirstNewTour = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spGetYearFirstNewTour(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};
Report.getYearFirstNewOrder = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("call " + databaseProduction + `.spGetYearFirstNewOrder(); `)
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};
Report.getReportNumberPeopleFollowDestinationAll = function(
  yearOldest,
  yearLatest
) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spReportNumberPeopleFollowDestinationAll(${yearOldest}, ${yearLatest}); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Report.getReportRevenueFollowMonthAll = function(dateOldest, dateLatest) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spReportRevenueFollowMonthAll('${dateOldest}', '${dateLatest}' ); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

/**
 * Hàm này trả về các điểm đến theo thời gian
 */
Report.getDestinationByTime = function(month) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spGetReportDestinationByTime('${month}'); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Report;
