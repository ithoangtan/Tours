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

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Image.getAllImageTour = function(fncResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".images WHERE statusAction <> 'deleted' AND idTour > 0;",
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.getAllImagePost = function(fncResult) {
  mysql.query(
    "SELECT * FROM " +
      databaseProduction +
      ".images WHERE statusAction <> 'deleted' AND idPost > 0;",
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
    "SELECT * FROM " +
      databaseProduction +
      ".images WHERE idTour = " +
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
    "UPDATE " +
      databaseProduction +
      ".images SET `statusAction` = 'deleted' WHERE idImage = ?",
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
    `INSERT INTO ${databaseProduction}.images (url, status, name, idTour) VALUES ('${url}', '${status}', ' ${name}' , '${idTour}')`,
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.createImagePost = function(idPost, name, fncResult) {
  var url = `/img/${name}`;
  var status = "done";
  mysql.query(
    `INSERT INTO ${databaseProduction}.images (url, status, name, idPost) VALUES ('${url}', '${status}', ' ${name}' , '${idPost}')`,
    function(err, res) {
      if (err) {
        fncResult(err, null);
      } else {
        fncResult(null, res);
      }
    }
  );
};

Image.updateAvatar = function(idAccount, name, fncResult) {
  var url = `/img/${name}`;
  mysql.query(
    "UPDATE " + databaseProduction + ".accounts SET ? WHERE (idAccount = ?);",
    [{ avatar: url }, idAccount],
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
