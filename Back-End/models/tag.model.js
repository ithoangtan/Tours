const database = require("../dbconnectMySql");

//Task object constructor
const Tag = function(tag) {
  this.idTag = tag.idTag | 0;
  this.name = tag.name;
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Tag.getAllTag = function() {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".tags WHERE statusAction <> 'deleted'; "
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Tag.getTagById = function(idTag) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".tags where idTag = ? AND statusAction <> 'deleted'; ",
        [idTag]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Tag.getAllTagSearch = function(searchs) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spSearchEngineTag( '${searchs.keySearch}' ); `
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Tag.createTag = function(newTag) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".tags (`name`) VALUES ('" +
          newTag.name +
          "') "
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Tag.updateById = function(updateTag) {
  updateTag = { ...updateTag, statusAction: "edited" };
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " + databaseProduction + ".tags SET ? WHERE (idTag = ?);",
        [updateTag, updateTag.idTag]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Tag.remove = function(idTag) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".tags SET `statusAction` = 'deleted' WHERE idTag = ?",
        [idTag]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Tag;
