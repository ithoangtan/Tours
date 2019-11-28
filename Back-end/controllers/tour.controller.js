//Upload image with multer
const multer = require("multer");

const Tour = require("../models/tour.model");

let nameFile;
let Storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "../admin-front-end/public/img");
  },
  filename: function(req, file, callback) {
    nameFile = Date.now() + "_" + file.originalname;
    callback(null, nameFile);
  }
});

let upload = multer({
  storage: Storage
}).array("imgUploader", 3); //Field name and max count

exports.postImg = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
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
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Tour.getAllTour(function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.create = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  let newTour = new Tour(req.body);
  Tour.createTour(newTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.read = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Tour.getTourById(req.query.idTour, function(err, tour) {
    if (err) res.send(err);
    res.json(tour[0]); //Đã là API thì trả về phải chuẩn
    //Chỉ có một phần tử thì không lý do gì phải res về một mảng
  });
};

exports.update = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = new Tour(req.body);
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.send(tour);
  });
};

exports.delete = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng ES7 để code
  Tour.remove(req.query.idTour, function(err, idTour) {
    if (err) res.send(err);
    res.send(idTour);
  });
};
