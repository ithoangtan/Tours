var Users = require("../model/User.model");
exports.list_all_users = function(req, res) {
  Users.getAlluser(function(err, users) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", users);
    res.send(users);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new Users(req.body);
  //handles null error
  if (!new_user.email || !new_user.fullName) {
    res
      .status(400)
      .send({ error: true, message: "Please provide full name / email" });
  } else {
    Users.createUser(new_user, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  }
};

exports.read_a_user = function(req, res) {
  console.log("IT1006-req", req.query.iduUser);
  Users.getUserById(req.query.idUser, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  Users.updateById(req.query.idUser, new Users(req.body), function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  Users.remove(req.query.idUser, function(err, user) {
    if (err) res.send(err);
    res.json({ message: "DELETE successfully deleted" });
  });
};
