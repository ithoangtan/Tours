var Tour = require("../models/tour.model");
var Schedule = require("../models/schedule.model");
//
//Upload image with multer
var multer = require("multer");
var nameFile;
var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "../admin-front-end/public/img");
  },
  filename: function(req, file, callback) {
    nameFile = Date.now() + "_" + file.originalname;
    callback(null, nameFile);
  }
});

var upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count

exports.postImg = function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    } else {
      Tour.createImageTour(req.query.idTour, nameFile, function(err, resp) {
        if (err) res.send(err);
        else res.send(req.query.idTour);
      });
    }
  });
};

exports.listAll = function(req, res) {
  Tour.getAllTour(function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.create = function(req, res) {
  var newTour = new Tour(req.body);
  Tour.createTour(newTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.read = function(req, res) {
  Tour.getTourById(req.query.idTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour[0]); //Đã là API thì trả về phải chuẩn
    //Chỉ có một phần tử thì không lý do gì phải res về một mảng
  });
};

exports.update = function(req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = new Tour(req.body);
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.send(tour);
  });
};

exports.delete = function(req, res) {
  Tour.remove(req.query.idTour, function(err, idTour) {
    if (err) res.send(err);
    res.send(idTour);
  });
};
