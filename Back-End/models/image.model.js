const mysql = require("../dbconnection.js");
const fs = require("fs");

const Image = function(image) {
  this.idImage = image.idImage | 0;
  this.link = image.link;
  this.dateAdded = image.dateAdded.slice(0, 10).replace(/-/g, "/"); //format date YYYY-MM-DD
  this.status = image.status;
  this.name = image.name;
  this.idTour = image.idTour;
};
Image.getAllImageTour = function(fncResult) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.images WHERE statusAction <> 'deleted';",
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.getAllImageTourById = function(idTour, fncResult) {
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.images WHERE idTour = " +
      idTour +
      " AND statusAction <> 'deleted';",
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.remove = function(idImage, name, fncResult) {
  mysql.query(
    "UPDATE kinhdoanhtourdulich.images SET `statusAction` = 'deleted' WHERE idImage = ?",
    [idImage],
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        var path = `../Front-End/public/img/${name}`;
        path = path.replace(" ", "");
        fs.unlink(path, err => {
          if (err) {
            console.log(err);
          }
        });
        fncResult(null, res);
      }
    }
  );
};

Image.createImageTour = function(idTour, name, fncResult) {
  var url = `/img/${name}`;
  var status = "done";
  mysql.query(
    `INSERT INTO kinhdoanhtourdulich.images (url, status, name, idTour) VALUES ('${url}', '${status}', ' ${name}' , '${idTour}')`,
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
