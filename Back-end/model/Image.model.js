"user strict";
var mysql = require("../dbconnection.js");

//Task object constructor
var Images = function(image) {
  this.link = image.link;
  this.fileImage = image.fileImage;
  this.idPost = image.idPost;
  // if (!image.tag) {
  //   this.tag = "";
  // }
  // if (!image.title) {
  //   this.title = "";
  // }
  // if (!image.describe) {
  //   this.describe = "";
  // }
};
Images.getAllImage = function(result) {
  mysql.query("SELECT * FROM news.images;", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("images : ", res);
      result(null, res);
    }
  });
};
Images.createImage = function(newImage, result) {
  mysql.query("INSERT INTO images set ?;", newImage, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Images.getImageById = function(idImage, result) {
  mysql.query(
    "SELECT * FROM news.images WHERE idImage = ? ;",
    [idImage],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Images.updateById = function(id, image, result) {
  mysql.query(
    "UPDATE news.images SET ? WHERE (idImage = ?);",
    [image, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Images.remove = function(idImage, result) {
  mysql.query("DELETE FROM news.images WHERE idImage = ?", [idImage], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Images;
