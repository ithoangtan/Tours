var Images = require("../model/ImagesM.js");

exports.list_all_image = function(req, res) {
  Image.getAllImage(function(err, image) {
    if (err) res.send(err);
    res.send(image);
  });
};

exports.create_a_image = function(req, res) {
  var new_image = new Image(req.body);

  if (!new_image.link) {
    res.status(400).send({ error: true, message: "Please provide link file" });
  } else {
    Image.createImage(new_image, function(err, image) {
      if (err) res.send(err);
      res.json(image);
    });
  }
};

exports.read_a_image = function(req, res) {
  Image.getImageById(req.query.idImage, function(err, image) {
    if (err) res.send(err);
    res.json(image);
  });
};

exports.update_a_image = function(req, res) {
  Image.updateById(req.query.idImage, new image(req.body), function(
    err,
    image
  ) {
    if (err) res.send(err);
    res.json(image);
  });
};

exports.delete_a_image = function(req, res) {
  Image.remove(req.query.idImage, function(err, image) {
    if (err) res.send(err);
    res.json({ message: "DELETE successfully deleted" });
  });
};
