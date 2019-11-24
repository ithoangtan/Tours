var Schedule = require("../models/schedule.model");

exports.listAll = function(req, res) {
  Schedule.getAllSchedule(function(err, schedule) {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.create = function(req, res) {
  var newSchedule = new Schedule(req.body);
  Schedule.createSchedule(newSchedule, function(err, schedule) {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.read = function(req, res) {
  if (req.query.idSchedule) {
    //Get follow idSchedule
    Schedule.getScheduleById(req.query.idSchedule, function(err, schedule) {
      if (err) res.send(err);
      res.json(schedule[0]); //Đã là API thì trả về phải chuẩn
      //Chỉ có một phần tử thì không lý do gì phải res về một mảng
    });
  } else if (req.query.idTour) {
    //Get follow idTour
    Schedule.getScheduleByIdTour(req.query.idTour, function(err, schedule) {
      if (err) res.send(err);
      res.json(schedule[0]);
    });
  }
};

exports.update = function(req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateSchedule = new Schedule(req.body);
  Schedule.updateById(updateSchedule, function(err, schedule) {
    if (err) res.send(err);
    res.send(schedule);
  });
};

exports.delete = function(req, res) {
  Schedule.remove(req.query.idSchedule, function(err, idSchedule) {
    if (err) res.send(err);
    res.send(idSchedule);
  });
};
