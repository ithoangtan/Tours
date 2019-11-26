var Image = require("../models/tourImage.model");

//Upload image with multer
var multer = require("multer");
var nameFile;
var dateNow = Date.now();

var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "../admin-front-end/public/img");
  },
  filename: function(req, file, callback) {
    nameFile = dateNow + "_" + file.originalname;
    callback(null, nameFile);
  }
});

var upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count

var Storage2 = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "../front-end/public/img");
  },
  filename: function(req, file, callback) {
    nameFile = dateNow + "_" + file.originalname;
    callback(null, nameFile);
  }
});
var upload2 = multer({
  storage: Storage2
}).array("imgUploader", 3); //Field name and max count

exports.create = function(req, res) {
  dateNow = Date.now();
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    } else {
      Image.createImageTour(req.query.idTour, nameFile, function(err, resp) {
        if (err) res.send(err);
        else res.send({ idTour: req.query.idTour, nameFile: nameFile });
      });
    }
  });
  upload2(req, res, function(err) {
    if (err) return res.send(err);
  });
};
exports.upload = function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
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
  Image.remove(req.query.idImage, req.query.name, function(err, idImage) {
    if (err) res.send(err);
    res.send(idImage);
  });
};
