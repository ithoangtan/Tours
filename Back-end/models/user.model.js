var mysql = require("../dbconnection");

var Account = function(account) {
  this.name = account.name;
  this.email = account.email;
  this.phone = account.phone;
  this.role = account.role;
  this.password = account.password;
};
Account.getAlluser = function(result) {
  mysql.query("Select * from kinhdoanhtourdulich.accounts ", function(
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
Account.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  mysql.query(
    "SELECT * FROM kinhdoanhtourdulich.accounts WHERE username = ?",
    [username],
    function(error, results, fields) {
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
    }
  );
};

module.exports = Account;
