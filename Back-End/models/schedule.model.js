const mysql = require("../dbconnection.js");

//Task object constructor
const Schedule = function(schedule) {
  this.data = schedule.data;
  this.idTour = schedule.idTour;
  this.policy = schedule.policy;
  this.detailPrice = schedule.detailPrice;
  this.notes = schedule.notes;
  this.concats = schedule.concats;
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Schedule.getAllSchedule = function(funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".schedules WHERE statusAction <> 'deleted';",
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

/**
 * Chủ yếu là gọi khi tạo tour, tour được tạo thì sẽ có một schedule được tạo theo
 */
Schedule.createSchedule = function(newSchedule, funcResult) {
  this.data = newSchedule.data;
  this.idTour = newSchedule.idTour;
  mysql.query(
    "INSERT INTO " +
      databaseProduction +
      ".schedules (`data`, `idTour`, `policy`, `detailPrice`, `notes`, `concats`) VALUES ('" +
      this.data +
      "', '" +
      this.idTour +
      "', '" +
      this.policy +
      "', '" +
      this.detailPrice +
      "', '" +
      this.notes +
      "', '" +
      this.concats +
      "') ",
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Schedule.getScheduleById = function(idSchedule, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".schedules  WHERE idSchedule = ? AND statusAction <> 'deleted';",
    [idSchedule],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Schedule.getScheduleByIdTour = function(idTour, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".schedules  WHERE idTour = ? AND statusAction <> 'deleted';",
    [idTour],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Schedule.updateById = function(updateTour, funcResult) {
  updateTour = { ...updateTour, statusAction: "edited" };
  mysql.query(
    "UPDATE " + databaseProduction + ".schedules SET ? WHERE (idTour = ?);",
    [updateTour, updateSchedule.idTour],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};
/**
 * Do cơ sở dữ liệu là casade nên khi xóa tour, schedule cũng sẽ đi theo
 */
Schedule.remove = function(idSchedule, funcResult) {
  mysql.query(
    "UPDATE " +
      databaseProduction +
      ".schedules SET `statusAction` = 'deleted'  WHERE idSchedule = ?",
    [idSchedule],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};
module.exports = Schedule;
