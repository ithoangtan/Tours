const Order = require("../models/order.model");

exports.listAll = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  const idAccount = req.query.idAccount;
  if (idAccount !== null && idAccount !== undefined && idAccount !== "") {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
    Order.getAllOrderForUser(req.query.idAccount, function(err, order) {
      if (err) res.send(err);
      res.json(order);
    });
  } else {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
    Order.getAllOrder(function(err, order) {
      if (err) res.send(err);
      res.json(order);
    });
  }
};
exports.create = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  let newOrder = new Order(req.body);
  Order.createOrder(newOrder, function(err, order) {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.read = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  const idAccount = req.query.idAccount;
  if (idAccount !== null && idAccount !== undefined && idAccount !== "") {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promisez
    Order.getOrderByIdWithIdAccount(
      req.query.idOrder,
      req.query.idAccount,
      function(err, order) {
        if (err) res.send(err);
        res.json(order[0]); //Đã là API thì trả về phải chuẩn
        //Chỉ có một phần tử thì không lý do gì phải res về một mảng
      }
    );
  } else {
    //Cú pháp cũ với callback - các controller khác sẽ dùng với Promisez
    Order.getOrderById(req.query.idOrder, function(err, order) {
      if (err) res.send(err);
      res.json(order[0]); //Đã là API thì trả về phải chuẩn
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
  updateOrder = new Order(req.body);
  Order.updateById(updateOrder, function(err, updateOrder) {
    if (err) res.send(err);
    res.send(updateOrder);
  });
};

exports.delete = function(req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/

  //Cú pháp cũ với callback - các controller khác sẽ dùng với Promise
  Order.remove(req.query.idOrder, function(err, idOrder) {
    if (err) res.send(err);
    res.send(idOrder);
  });
};
