var Users = require("../model/user.model");
exports.list_all_users = function(req, res) {
  Users.getAlluser(function(err, users) {
    if (err) res.send(err);
    res.send(users);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new Users(req.body);
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

// exports.delete_a_user = function(req, res) {
//   Users.remove(req.query.idUser, function(err, user) {
//     if (err) res.send(err);
//     res.json({ message: "DELETE successfully deleted" });
//   });
// };
