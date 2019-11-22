var Tour = require("../models/Tour.model");

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
    res.json(tour);
  });
};

exports.update = function(req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = new Tour(req.body);
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.delete = function(req, res) {
  Tour.remove(req.query.idTour, function(err, idTour) {
    if (err) res.send(err);
    res.send(idTour);
  });
};
