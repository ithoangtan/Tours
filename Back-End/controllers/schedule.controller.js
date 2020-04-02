const Schedule = require("../models/schedule.model");

exports.listAll = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Schedule.getAllSchedule(function(err, schedule) {
    if (err) res.send(err);
    else res.json(schedule);
  });
};

exports.create = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  var newSchedule = new Schedule(req.body);
  Schedule.createSchedule(newSchedule, function(err, schedule) {
    if (err) res.send(err);
    else res.json(schedule);
  });
};

exports.read = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  if (req.query.idSchedule !== null && req.query.idSchedule !== undefined) {
    //Get follow idSchedule
    Schedule.getScheduleById(req.query.idSchedule, function(err, schedule) {
      if (err) res.send(err);
      else res.json(schedule[0]); //Đã là API thì trả về phải chuẩn
      //Chỉ có một phần tử thì không lý do gì phải res về một mảng
    });
  } else if (req.query.idTour !== null && req.query.idTour !== undefined) {
    //Get follow idTour
    Schedule.getScheduleByIdTour(req.query.idTour, function(err, schedule) {
      if (err) res.send(err);
      else res.json(schedule[0]);
    });
  }
};

exports.update = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  // updateSchedule = new Schedule(req.body);

  updateSchedule = req.body;
  Schedule.updateById(updateSchedule, function(err, schedule) {
    if (err) res.send(err);
    else res.json(schedule);
  });
};

exports.delete = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Schedule.remove(req.query.idSchedule, function(err, idSchedule) {
    if (err) res.send(err);
    else res.json(idSchedule);
  });
};
