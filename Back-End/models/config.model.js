const database = require("../dbconnectMySql");

//Task object constructor
const Config = function (config) {
  this.idConfig = config.idConfig | 0;
  this.configs = config.configs;
  this.infoType = config.infoType;
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Config.getAllConfig = function () {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".configs WHERE statusAction <> 'deleted'; "
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Config.getConfigById = function (idConfig) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".configs where idConfig = ? AND statusAction <> 'deleted'; ",
        [idConfig]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};
Config.getConfigByInfoType = function (infoType) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".configs where infoType = ? AND statusAction <> 'deleted'; ",
        [infoType]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};
Config.getAllConfigSearch = function (searchs) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spSearchEngineConfig( '${searchs.keySearch}' ); `
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Config.createConfig = function (newConfig) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".configs (`infoType`, `configs`) VALUES ('" +
          newConfig.infoType +
          "', '" +
          newConfig.configs +
          "') "
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Config.updateById = function (updateConfig) {
  updateConfig = { ...updateConfig, statusAction: "edited" };
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " + databaseProduction + ".configs SET ? WHERE (idConfig = ?);",
        [updateConfig, updateConfig.idConfig]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Config.remove = function (idConfig) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".configs SET `statusAction` = 'deleted' WHERE idConfig = ?",
        [idConfig]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

module.exports = Config;
