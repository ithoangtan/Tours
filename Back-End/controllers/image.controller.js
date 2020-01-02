//Upload image with multer
const multer = require("multer");

const Image = require("../models/image.model");

let nameFile = "";
let dateNow = Date.now();

let Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/img");
  },
  filename: function(req, file, callback) {
    nameFile = dateNow + "_" + file.originalname;
    callback(null, nameFile);
  }
});

let upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count

exports.create = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  dateNow = Date.now();
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    } else {
      Image.createImageTour(req.query.idTour, nameFile, function(err, resp) {
        if (err) res.send(err);
        else
          res.send({
            idTour: req.query.idTour,
            nameFile: nameFile
          });
      });
    }
  });
};
exports.avatar = function(req, res) {
  dateNow = Date.now();
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    } else {
      Image.updateAvatar(req.query.idAccount, nameFile, function(err, resp) {
        if (err) res.send(err);
        else
          res.send({
            idAccount: req.query.idAccount,
            nameFile: nameFile
          });
      });
    }
  });
};

exports.upload = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  upload(req, res, function(err) {
    if (err) {
      return res.send(err);
    }
  });
};

exports.listAllImageTour = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImageTour(function(err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.listAllImageTourById = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImageTourById(req.query.idTour, function(err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.delete = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.remove(req.query.idImage, req.query.name, function(err, idImage) {
    if (err) res.send(err);
    res.json(idImage);
  });
};
