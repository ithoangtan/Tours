var Tour = require("../model/Tour.model");

exports.list_all_tour = function(req, res) {
  Tour.getAllTour(function(err, tour) {
    if (err) res.send(err);
    res.send(tour);
  });
};

exports.create_a_tour = function(req, res) {
  var newTour = new Tour(req.body);
  Tour.createTour(newTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.read_a_tour = function(req, res) {
  Tour.getTourById(req.query.idTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.update_a_tour = function(req, res) {
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = new Tour(req.body);
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.delete_a_tour = function(req, res) {
  Tour.remove(req.body.idTour, function(err, idTour) {
    if (err) res.send(err);
    res.send(idTour);
  });
};
// exports.get_Comment = function(req, res) {
//   Tour.ComentTour(function(err, tour) {
//     if (err) res.send(err);
//     res.send(tsour);
//   });
// };
