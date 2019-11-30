const database = require("../dbconnectMySql");

const Account = function(account) {
  this.idAccount = account.idAccount || null;
  this.name = account.name;
  this.username = account.username || account.email;
  this.email = account.email;
  this.phone = account.phone;
  this.role = account.role || "user"; //user(customer), admin(customer), administrator(full permission)
  this.password = account.password;
};

/**
 * Hàm này trả về một Promise;
 * resolve - rows SELECT được;
 * reject -  err of sql
 */
Account.getAll = function() {
  return new Promise(function(resolve, reject) {
    database
      .query("SELECT * FROM kinhdoanhtourdulich.accounts;")
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Account.create = function(newAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "INSERT INTO kinhdoanhtourdulich.accounts (`name`, `username`, `email`, `phone`, `role`, `password`) VALUES ('" +
          newAccount.name +
          "', '" +
          newAccount.username +
          "', '" +
          newAccount.email +
          "', '" +
          newAccount.phone +
          "', '" +
          newAccount.role +
          "', '" +
          newAccount.password +
          "') "
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Account.getById = function(idAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM kinhdoanhtourdulich.accounts  WHERE idAccount= ? ;",
        [idAccount]
      )
      .then(rows => resolve(rows[0]))
      .catch(err => reject(err));
  });
};

Account.getByEmailAndRole = function(email, role) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM kinhdoanhtourdulich.accounts  WHERE email= ? AND role= ?;",
        [email, role]
      )
      .then(rows => resolve(rows[0]))
      .catch(err => reject(err));
  });
};

Account.getByIdFaceboook = function(idGoogle) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM kinhdoanhtourdulich.accounts  WHERE idGoogle= ? ;",
        [idGoogle]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Account.getByIdGoogle = function(idFacebook) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM kinhdoanhtourdulich.accounts  WHERE idFacebook= ? ;",
        [idFacebook]
      )
      .then(rows => resolve(rows[0]))
      .catch(err => reject(err));
  });
};

Account.updateById = function(updateAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE kinhdoanhtourdulich.accounts SET  ?  WHERE (idAccount= ?);",
        [updateAccount, updateAccount.idAccount]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Account.remove = function(idAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query("DELETE FROM kinhdoanhtourdulich.accounts WHERE idAccount= ?", [
        idAccount
      ])
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Account;
