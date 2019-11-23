var Image = require("../models/TourImage.model");

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

exports.create = function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    } else {
      Image.createImageTour(req.query.idTour, nameFile, function(err, resp) {
        if (err) res.send(err);
        else res.send(req.query.idTour);
      });
    }
  });
};

exports.listAllImageTour = function(req, res) {
  Image.getAllImageTour(function(err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.listAllImageTourById = function(req, res) {
  Image.getAllImageTourById(req.query.idTour, function(err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.delete = function(req, res) {
  Image.remove(req.query.idImage, function(err, idImage) {
    if (err) res.send(err);
    res.send(idImage);
  });
};
