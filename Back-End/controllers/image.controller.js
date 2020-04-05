//Upload image with multer
const multer = require("multer");

const Image = require("../models/image.model");

let nameFile = "";
let dateNow = Date.now();

let Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img");
  },
  filename: function (req, file, callback) {
    nameFile = dateNow + "_" + file.originalname;
    callback(null, nameFile);
  },
});

let upload = multer({
  storage: Storage,
}).array("imgUploader", 3); //Field name and max count

exports.create = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  dateNow = Date.now();
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    } else {
      if (req.query.idTour) {
        Image.createImageTour(req.query.idTour, nameFile, function (err, resp) {
          if (err) res.send(err);
          else
            res.send({
              idTour: req.query.idTour,
              nameFile: nameFile,
            });
        });
      } else if (req.query.idPost) {
        Image.createImagePost(req.query.idPost, nameFile, function (err, resp) {
          if (err) res.send(err);
          else
            res.send({
              idPost: req.query.idPost,
              nameFile: nameFile,
            });
        });
      } else if (req.query.idConfig) {
        Image.createImageConfig(req.query.idConfig, nameFile, function (
          err,
          resp
        ) {
          if (err) res.send(err);
          else
            res.send({
              idConfig: req.query.idConfig,
              nameFile: nameFile,
            });
        });
      }
    }
  });
};

exports.avatar = function (req, res) {
  dateNow = Date.now();
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    } else {
      Image.updateAvatar(req.query.idAccount, nameFile, function (err, resp) {
        if (err) res.send(err);
        else
          res.send({
            idAccount: req.query.idAccount,
            nameFile: nameFile,
          });
      });
    }
  });
};

exports.upload = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
  });
};

exports.listAllImageTour = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImageTour(function (err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.listAllImagePost = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImagePost(function (err, postImage) {
    if (err) res.send(err);
    else res.json(postImage);
  });
};

exports.listAllImageConfig = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImageConfig(function (err, configImage) {
    if (err) res.send(err);
    res.json(configImage);
  });
};
exports.listAllImageTourById = function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Image.getAllImageTourById(req.query.idTour, function (err, tourImage) {
    if (err) res.send(err);
    res.json(tourImage);
  });
};

exports.delete = async (req, res) => {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  await Image.getImageById(req.query.idImage, function (err, result) {
    if (err) res.send(err);
    //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
    let fileName = result[0].name;
    Image.remove(req.query.idImage, fileName, function (err, idImage) {
      if (err) res.send(err);
      res.json(idImage);
    });
  });
};
