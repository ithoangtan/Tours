var mysql = require("../dbconnection.js");

//Task object constructor
var Tour = function(tour) {
  this.idTour = tour.idTour | 0;
  this.titleTour = tour.titleTour;
  this.price = tour.price;
  this.sale = tour.sale;
  // this.dateAdded = tour.dateAdded;
  this.departureDay = tour.departureDay;
  this.describe = tour.describe;
  this.address = tour.address;
  this.vocationTime = tour.vocationTime;
};
Tour.getAllTour = function(result) {
  mysql.query("SELECT * FROM kinhdoanhtourdulichtest.tours ;", function(
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Tour.createTour = function(newTour, result) {
  this.titleTour = newTour.titleTour;
  this.price = newTour.price;
  this.sale = newTour.sale;
  this.departureDay = newTour.departureDay;
  this.describe = newTour.describe;
  this.address = newTour.address;
  this.vocationTime = newTour.vocationTime;
  mysql.query(
    "INSERT INTO kinhdoanhtourdulichtest.tours (`titleTour`, `price`, `sale`, `departureDay`, `describe`, `address`, `vocationTime`) VALUES ('" +
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
    "SELECT * FROM kinhdoanhtourdulichtest.tours  WHERE idTour = ? ;",
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
Tour.updateById = function(updateTour, result) {
  mysql.query(
    "UPDATE kinhdoanhtourdulichtest.tours SET ? WHERE (idTour = ?);",
    [updateTour, updateTour.idTour],
    function(err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Tour.remove = function(idTour, result) {
  mysql.query(
    "DELETE FROM kinhdoanhtourdulichtest.tours WHERE idTour = ?",
    [idTour],
    function(err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
// Tour.ComentTour = function(result) {
//   mysql.query("CALL countCommentTour()", function(err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {
//       console.log("comment : ", res[0]);
//       result(null, res[0]);
//     }
//   });
// };
module.exports = Tour;
