const mysql = require("../dbconnection.js");

//Task object constructor
const Schedule = function(schedule) {
  this.data = schedule.data;
  this.idTour = schedule.idTour;
};
Schedule.getAllSchedule = function(funcResult) {
  mysql.query("SELECT * FROM kinhdoanhtourdulich.schedules ;", function(
    err,
    res
  ) {
    if (err) {
      funcResult(err, null);
    } else {
      funcResult(null, res);
    }
  });
};

/**
 * Chủ yếu là gọi khi tạo tour, tour được tạo thì sẽ có một schedule được tạo theo
 */
Schedule.createSchedule = function(newSchedule, funcResult) {
  this.data = newSchedule.data;
  this.idTour = newSchedule.idTour;
  mysql.query(
    "INSERT INTO kinhdoanhtourdulich.schedules (`data`, `idTour`) VALUES ('" +
      this.data +
      "', '" +
      this.idTour +
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
    "SELECT * FROM kinhdoanhtourdulich.schedules  WHERE idSchedule = ? ;",
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
    "SELECT * FROM kinhdoanhtourdulich.schedules  WHERE idTour = ? ;",
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
  mysql.query(
    "UPDATE kinhdoanhtourdulich.schedules SET ? WHERE (idTour = ?);",
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
    "DELETE FROM kinhdoanhtourdulich.schedules WHERE idSchedule = ?",
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
