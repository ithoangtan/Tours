var mysql = require("../dbconnection.js");

//Task object constructor
var Schedule = function(schedule) {
  this.idSchedule = schedule.idSchedule | 0;
  this.data = schedule.data;
  this.idTour = schedule.idTour;
};
Schedule.getAllSchedule = function(result) {
  mysql.query("SELECT * FROM kinhdoanhtourdulich.schedules ;", function(
    err,
    res
  ) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Schedule.createSchedule = function(newSchedule, result) {
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
        result(err, null);
      } else {
        result(null, result);
      }
    }
  );
};

Schedule.getScheduleById = function(idSchedule, result) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.schedules  WHERE idSchedule = ? ;",
    [idSchedule],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Schedule.getScheduleByIdTour = function(idTour, result) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.schedules  WHERE idTour = ? ;",
    [idTour],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Schedule.updateById = function(updateTour, result) {
  mysql.query(
    "UPDATE kinhdoanhtourdulich.schedules SET ? WHERE (idSchedule = ?);",
    [updateTour, updateSchedule.idSchedule],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Schedule.remove = function(idSchedule, result) {
  mysql.query(
    "DELETE FROM kinhdoanhtourdulich.schedules WHERE idSchedule = ?",
    [idSchedule],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Schedule;
