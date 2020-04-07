const database = require("../dbconnectMySql");

//Task object constructor
const Notification = function (notification) {
  this.idNotification = notification.idNotification | 0;
  this.title = notification.title;
  this.contentNotification = notification.contentNotification;
  this.status = notification.status;
  this.type = notification.type;
  this.dateTime = notification.dateTime
    ? notification.dateTime.slice(0, 10).replace(/-/g, "/")
    : undefined;
  // this.dateCreated = notification.dateCreated.slice(0, 10).replace(/-/g, "/");
  this.idAccount = notification.idAccount;
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Notification.getPaginationNotification = function (limit, offset) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "call " +
          databaseProduction +
          `.spPaginationNotification( '${limit}' , '${offset}' ); `
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Notification.getAllNotification = function () {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".notifications WHERE statusAction <> 'deleted';"
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};
Notification.getAllNotificationSearch = function (searchs) {
  if (searchs.conditional === "title") {
    return new Promise(function (resolve, reject) {
      database
        .query(
          "call " +
            databaseProduction +
            `.spsearchEngineNotificationByTitle( '${searchs.keySearch}' ); `
        )
        .then((rows) => resolve(rows))
        .catch((err) => reject(err));
    });
  } else if (searchs.conditional === "content") {
    return new Promise(function (resolve, reject) {
      database
        .query(
          "call " +
            databaseProduction +
            `.spsearchEngineNotificationByContent( '${searchs.keySearch}'); `
        )
        .then((rows) => resolve(rows))
        .catch((err) => reject(err));
    });
  } else {
    return new Promise(function (resolve, reject) {
      database
        .query(
          "call " +
            databaseProduction +
            `.spsearchEngineNotification( '${searchs.keySearch}', '${searchs.dayTime}' ); `
        )
        .then((rows) => resolve(rows))
        .catch((err) => reject(err));
    });
  }
};

Notification.createNotification = function (newNotification) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".notifications (`title`, `contentNotification`, `status`, `type`, `dateTime`, `idAccount`) VALUES ('" +
          newNotification.title +
          "', '" +
          newNotification.contentNotification +
          "', '" +
          newNotification.status +
          "', '" +
          newNotification.type +
          "', '" +
          newNotification.dateTime +
          "', '" +
          newNotification.idAccount +
          "') "
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Notification.getNotificationById = function (idNotification) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".notifications  WHERE idNotification = ? AND statusAction <> 'deleted';",
        [idNotification]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Notification.updateById = function (updateNotification) {
  updateNotification = { ...updateNotification, statusAction: "edited" };
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".notifications SET ? WHERE (idNotification = ?);",
        [updateNotification, updateNotification.idNotification]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Notification.remove = function (idNotification) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".notifications SET `statusAction` = 'deleted' WHERE idNotification = ?",
        [idNotification]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

module.exports = Notification;
