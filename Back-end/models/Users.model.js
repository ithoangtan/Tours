var mysql = require("../dbconnection");

var Account = function(account) {
  this.name = account.name;
  this.email = account.email;
  this.phone = account.phone;
  this.role = account.role;
  this.password = account.password;
};
Account.getAlluser = function(result) {
  mysql.query("Select * from kinhdoanhtourdulich.accounts ", function(err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Account.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  mysql.query("SELECT * FROM kinhdoanhtourdulich.accounts WHERE username = ?", [username], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            code: 200,
            success: "login sucessfull"
          });
        } else {
          res.send({
            code: 204,
            success: "Email and password does not match"
          });
        }
      } else {
        res.send({
          code: 204,
          success: "Email does not exits"
        });
      }
    }
  });
};

// exports.list_all_Account = function(req, res) {
//   Account.getAllAccount(function(err, Account) {
//     console.log("controller");
//     if (err) res.send(err);
//     console.log("res", Account);
//     res.send(Account);
//   });
// };

// exports.create_a_user = function(req, res) {
//   var new_user = new Account(req.body);

//   //handles null error
//   if (!new_user.fullName || !new_user.email) {
//     res.status(400).send({
//       error: true,
//       message: "Please provide full name / email"
//     });
//   } else {
//     Account.createuser(new_user, function(err, user) {
//       if (err) res.send(err);
//       res.json(user);
//     });
//   }
// };

// exports.read_a_user = function(req, res) {
//   console.log("IT1006-req", req.query.idUser);
//   Account.getUserById(req.query.idUser, function(err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// };

// exports.update_a_user = function(req, res) {
//   Account.updateById(req.query.idUser, new Account(req.body), function(err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// };

// exports.delete_a_user = function(req, res) {
//   Account.remove(req.query.idUser, function(err, user) {
//     if (err) res.send(err);
//     res.json({ message: "DELETE successfully deleted" });
//   });
// };

module.exports = Account;
