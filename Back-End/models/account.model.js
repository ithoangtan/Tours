const database = require("../dbconnectMySql");

const Account = function(account) {
  this.idAccount = account.idAccount || null;
  this.name = account.name;
  this.username = account.username || account.email;
  this.email = account.email;
  this.phone = account.phone;
  this.role = account.role || "user"; //user(customer), admin(customer), administrator(full permission)
  this.password = account.password;
  this.verifyToken = account.verifyToken;
};
const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

/**
 * Hàm này trả về một Promise;
 * resolve - rows SELECT được;
 * reject -  err of sql
 */
Account.getAll = function() {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".accounts WHERE statusAction <> 'deleted';"
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Account.create = function(newAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".accounts (`name`, `username`, `email`, `phone`, `role`, `password`, `verify` , `verifyToken` ) VALUES ('" +
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
          "', '" +
          newAccount.verify +
          "', '" +
          newAccount.verifyToken +
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
        "SELECT * FROM " +
          databaseProduction +
          ".accounts  WHERE idAccount= ? AND statusAction <> 'deleted';",
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
        "SELECT * FROM " +
          databaseProduction +
          ".accounts  WHERE email= ? AND role= ? AND statusAction <> 'deleted';",
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
        "SELECT * FROM " +
          databaseProduction +
          ".accounts  WHERE idGoogle= ? AND statusAction <> 'deleted' ;",
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
        "SELECT * FROM " +
          databaseProduction +
          ".accounts  WHERE idFacebook= ?  AND statusAction <> 'deleted';",
        [idFacebook]
      )
      .then(rows => resolve(rows[0]))
      .catch(err => reject(err));
  });
};

Account.updateById = function(updateAccount) {
  updateAccount = { ...updateAccount, statusAction: "edited" };
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".accounts SET  ?  WHERE (idAccount= ?);",
        [updateAccount, updateAccount.idAccount]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

/**
 * remove status mà thôi!!!
 */
Account.remove = function(idAccount) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".accounts SET `statusAction` = 'deleted' WHERE (idAccount= ?);",
        [idAccount]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Account;
