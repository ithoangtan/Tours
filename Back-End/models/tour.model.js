const mysql = require("../dbconnection.js");

//Task object constructor
const Tour = function(tour) {
  this.idTour = tour.idTour | 0;
  this.titleTour = tour.titleTour;
  this.price = tour.price;
  this.sale = tour.sale;
  this.departureDay = tour.departureDay.slice(0, 10).replace(/-/g, "/");
  //Chúng ta cần format date lại khi đưa xuống CSDL;
  this.describe = tour.describe;
  this.address = tour.address;
  this.vocationTime = tour.vocationTime;
  this.idAccount = tour.idAccount;
};
Tour.getAllTour = function(result) {
  mysql.query("SELECT * FROM kinhdoanhtourdulich.tours ;", function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Tour.getAllTourForUser = function(idAccount, result) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.tours where idAccount = ?; ",
    [idAccount],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Tour.createTour = function(newTour, result) {
  this.titleTour = newTour.titleTour;
  this.price = newTour.price;
  this.sale = newTour.sale;
  this.departureDay = newTour.departureDay;
  this.describe = newTour.describe;
  this.address = newTour.address;
  this.vocationTime = newTour.vocationTime;
  this.idAccount = newTour.idAccount;
  mysql.query(
    "INSERT INTO kinhdoanhtourdulich.tours (`titleTour`, `price`, `sale`, `departureDay`, `describe`, `address`, `vocationTime`, `idAccount`) VALUES ('" +
      this.titleTour +
      "', '" +
      this.price +
      "', '" +
      this.sale +
      "', '" +
      this.departureDay +
      "', '" +
      this.describe +
      "', '" +
      this.address +
      "', '" +
      this.vocationTime +
      "', '" +
      this.idAccount +
      "') ",
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, result);
      }
    }
  );
};

Tour.getTourById = function(idTour, result) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.tours  WHERE idTour = ? ;",
    [idTour],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Tour.getTourByIdWithIdAccount = function(idTour, idAccount, result) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.tours  WHERE idTour = ? AND idAccount = ? ;",
    [idTour, idAccount],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Tour.updateById = function(updateTour, result) {
  mysql.query(
    "UPDATE kinhdoanhtourdulich.tours SET ? WHERE (idTour = ?);",
    [updateTour, updateTour.idTour],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Tour.remove = function(idTour, result) {
  mysql.query(
    "DELETE FROM kinhdoanhtourdulich.tours WHERE idTour = ?",
    [idTour],
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Tour.createImageTour = function(idTour, name, result) {
  var link = `/img/${name}`;
  var status = "done";
  mysql.query(
    `INSERT INTO kinhdoanhtourdulich.images (link, status, name, idTour) VALUES ('${link}', '${status}', ' ${name}' , '${idTour}')`,
    function(err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Tour;
