var mysql = require("../dbconnection.js");

//Task object constructor
var Image = function(image) {
  this.idImage = image.idImage | 0;
  this.link = image.link;
  this.dateAdded = image.dateAdded.slice(0, 10).replace(/-/g, "/");
  //Chúng ta cần format date lại khi đưa xuống CSDL;
  this.status = image.status;
  this.name = image.name;
  this.idTour = image.idTour;
};
Image.getAllImageTour = function(fncResult) {
  mysql.query("SELECT * FROM kinhdoanhtourdulich.images;", function(err, res) {
    if (err) {
      fncResult(err, null);
    } else {
      fncResult(null, res);
    }
  });
};

Image.getAllImageTourById = function(idTour, fncResult) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.images WHERE idTour = " + idTour + " ;",
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.remove = function(idImage, fncResult) {
  mysql.query(
    "DELETE FROM kinhdoanhtourdulich.images WHERE idImage = ?",
    [idImage],
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.createImageTour = function(idTour, name, fncResult) {
  var link = `/img/${name}`;
  var status = "done";
  mysql.query(
    `INSERT INTO kinhdoanhtourdulich.images (link, status, name, idTour) VALUES ('${link}', '${status}', ' ${name}' , '${idTour}')`,
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

module.exports = Image;
