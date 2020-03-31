//Upload image with multer
// const multer = require("multer");

const Tour = require("../models/tour.model");

// let nameFile;
// let Storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, "../admin-front-end/public/img");
//   },
//   filename: function(req, file, callback) {
//     nameFile = Date.now() + "_" + file.originalname;
//     callback(null, nameFile);
//   }
// });

// let upload = multer({
//   storage: Storage
// }).array("imgUploader", 8); //Field name and max count

// exports.postImg = function(req, res) {
//   //Nên dùng express-validator để validator dữ liệu trước
//   //Nhưng vì không có thời gian nên khoan làm
//   //https://express-validator.github.io/docs/

//   //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
//   upload(req, res, function(err) {
//     if (err) {
//       return res.send(err);
//     } else {
//       Tour.createImageTour(req.query.idTour, nameFile, function(err, resp) {
//         if (err) res.send(err);
//         else res.send(req.query.idTour);
//       });
//     }
//   });
// };
exports.listTourSearch = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  const searchs = {
    keySearch: req.body.keySearch,
    dayStart: req.body.dayStart,
    dayEnd: req.body.dayEnd,
    conditional: req.body.conditional
  };
  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  Tour.getAllTourSearch(searchs, function(err, tour) {
    if (err) res.send(err);
    res.json(tour);
  });
};

exports.listAll = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  const idAccount = req.query.idAccount;
  if (idAccount !== null && idAccount !== undefined && idAccount !== "") {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
    Tour.getAllTourForUser(req.query.idAccount, function(err, tour) {
      if (err) res.send(err);
      res.json(tour);
    });
  } else {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
    Tour.getAllTour(function(err, tour) {
      if (err) res.send(err);
      res.json(tour);
    });
  }
};
exports.create = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
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

  const idAccount = req.query.idAccount;
  if (idAccount !== null && idAccount !== undefined && idAccount !== "") {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promisez
    Tour.getTourByIdWithIdAccount(
      req.query.idTour,
      req.query.idAccount,
      function(err, tour) {
        if (err) res.send(err);
        res.json(tour[0]); //Đã là API thì trả về phải chuẩn
        //Chỉ có một phần tử thì không lý do gì phải res về một mảng
      }
    );
  } else {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promisez
    Tour.getTourById(req.query.idTour, function(err, tour) {
      if (err) res.send(err);
      res.json(tour[0]); //Đã là API thì trả về phải chuẩn
      //Chỉ có một phần tử thì không lý do gì phải res về một mảng
    });
  }
};

exports.update = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = new Tour(req.body);
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.send(tour);
  });
};

exports.putTagsAndServices = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  // Phải truyền vào như v kh thì dăn lỗi ...
  updateTour = req.body;
  Tour.updateById(updateTour, function(err, tour) {
    if (err) res.send(err);
    res.send(tour);
  });
};

exports.delete = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  Tour.remove(req.query.idTour, function(err, idTour) {
    if (err) res.send(err);
    res.send(idTour);
  });
};
