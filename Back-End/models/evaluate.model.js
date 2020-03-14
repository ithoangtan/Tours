const database = require("../dbconnectMySql");

//Task object constructor
const Evaluate = function(evaluate) {
  this.idEvaluate = evaluate.idEvaluate | 0;
  this.numberStar = evaluate.numberStar;
  this.title = evaluate.title;
  this.contentEvaluate = evaluate.contentEvaluate;
  this.idAccount = evaluate.idAccount;
  this.idTour = evaluate.idTour;
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Evaluate.getEvaluateById = function(idEvaluate) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " + databaseProduction + `.spGetEvaluateById( '${idEvaluate}' ); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Evaluate.getEvaluateByIdTour = function(idTour) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " + databaseProduction + `.spGetEvaluateByIdTour( '${idTour}' ); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Evaluate.createEvaluate = function(newEvaluate) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".evaluates (`numberStar`, `title`, `contentEvaluate`, `idAccount`, `idTour`) VALUES ('" +
          newEvaluate.numberStar +
          "', '" +
          newEvaluate.title +
          "', '" +
          newEvaluate.contentEvaluate +
          "', '" +
          newEvaluate.idAccount +
          "', '" +
          newEvaluate.idTour +
          "') "
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Evaluate.updateById = function(updateEvaluate) {
  updateEvaluate = { ...updateEvaluate, statusAction: "edited" };
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".evaluates SET ? WHERE (idEvaluate = ?);",
        [updateEvaluate, updateEvaluate.idEvaluate]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Evaluate.remove = function(idEvaluate) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".evaluates SET `statusAction` = 'deleted' WHERE idEvaluate = ?",
        [idEvaluate]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Evaluate;
