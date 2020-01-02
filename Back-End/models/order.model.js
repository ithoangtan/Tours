const mysql = require("../dbconnection.js");

//Task object constructor
const Order = function(order) {
  this.idOrder = order.idOrder || 0;
  this.PIN = order.PIN || 0;
  this.status = order.status || "verify";
  this.totalPrice = order.totalPrice || 0;
  this.numberPeople = order.numberPeople || 1;
  this.numberChildren = order.numberChildren || 0;
  this.address = order.address || " ";
  this.phone = order.phone || " ";
  this.email = order.email || " ";
  this.notes = order.notes || " ";
  this.idAccount = order.idAccount || 8;
  this.buyer = order.buyer || " ";
  this.idTour = order.idTour || " ";
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Order.getAllOrder = function(funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".orders WHERE statusAction <> 'deleted';",
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.getAllOrderForUser = function(idAccount, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".orders where idAccount = ? AND WHERE statusAction <> 'deleted'; ",
    [idAccount],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.createOrder = function(newOrder, funcResult) {
  this.PIN = newOrder.PIN;
  this.status = newOrder.status;
  this.totalPrice = newOrder.totalPrice;
  this.numberPeople = newOrder.numberPeople;
  this.numberChildren = newOrder.numberChildren;
  this.address = newOrder.address;
  this.phone = newOrder.phone;
  this.email = newOrder.email;
  this.notes = newOrder.notes;
  this.idAccount = newOrder.idAccount;
  this.buyer = newOrder.buyer;
  this.idTour = newOrder.idTour;

  mysql.query(
    "INSERT INTO " +
      databaseProduction +
      ".orders (`PIN`, `status`, `totalPrice`, `numberPeople`," +
      " `numberChildren`, `address`, `phone`,`email`,`notes`, `idAccount`, `buyer`, `idTour` ) VALUES ('" +
      this.PIN +
      "', '" +
      this.status +
      "', '" +
      this.totalPrice +
      "', '" +
      this.numberPeople +
      "', '" +
      this.numberChildren +
      "', '" +
      this.address +
      "', '" +
      this.phone +
      "', '" +
      this.email +
      "', '" +
      this.notes +
      "', '" +
      this.idAccount +
      "', '" +
      this.buyer +
      "', '" +
      this.idTour +
      "') ",
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.getOrderById = function(idOrder, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".orders  WHERE idOrder = ? AND WHERE statusAction <> 'deleted';",
    [idOrder],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};
Order.getOrderByEmail = function(email, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".orders inner join tours on tours.idTour = orders.idTour WHERE email = ? AND orders.statusAction <> 'deleted' order by " +
      databaseProduction +
      ".orders.dateAdded desc limit 0,5;",
    [email],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.getOrderByIdWithIdAccount = function(idOrder, idAccount, funcResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".orders  WHERE idOrder = ? AND idAccount = ? AND WHERE statusAction <> 'deleted';",
    [idOrder, idAccount],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.updateById = function(updateOrder, funcResult) {
  updateOrder = { ...updateOrder, statusAction: "edited" };
  mysql.query(
    "UPDATE " + databaseProduction + ".orders SET ? WHERE (idOrder = ?);",
    [updateOrder, updateOrder.idOrder],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.updateByPIN = function(updateOrder, funcResult) {
  updateOrder = { ...updateOrder, statusAction: "edited" };
  mysql.query(
    "UPDATE " + databaseProduction + ".orders SET ? WHERE (PIN = ?);",
    [updateOrder, updateOrder.PIN],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

Order.remove = function(idOrder, funcResult) {
  mysql.query(
    "UPDATE " +
      databaseProduction +
      ".orders SET `statusAction` = 'deleted' WHERE idOrder = ?",
    [idOrder],
    function(err, res) {
      if (err) {
        funcResult(err, null);
      } else {
        funcResult(null, res);
      }
    }
  );
};

module.exports = Order;
