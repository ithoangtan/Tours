const database = require("../dbconnectMySql");

//Task object constructor
const Timeline = function(timeline) {
  this.idTimelines = timeline.idTimelines | 0;
  this.idTour = timeline.idTour;
  this.title = timeline.title;
  this.description = timeline.description;
  this.date = timeline.date.slice(0, 10).replace(/-/g, "/");
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Timeline.getTimelineById = function(idTimelines) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".timelines where idTimelines = ? AND statusAction <> 'deleted'; ",
        [idTimelines]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Timeline.createTimeline = function(newTimeline) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".timelines (`idTour`, `title`, `description`, `date`) VALUES ('" +
          newTimeline.idTour +
          "', '" +
          newTimeline.title +
          "', '" +
          newTimeline.description +
          "', '" +
          newTimeline.date +
          "') "
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Timeline.updateById = function(updateTimeline) {
  updateTimeline = { ...updateTimeline, statusAction: "edited" };
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".timelines SET ? WHERE (idTimelines = ?);",
        [updateTimeline, updateTimeline.idTimelines]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

Timeline.remove = function(idTimelines) {
  return new Promise(function(resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".timelines SET `statusAction` = 'deleted' WHERE idTimelines = ?",
        [idTimelines]
      )
      .then(rows => resolve(rows))
      .catch(err => reject(err));
  });
};

module.exports = Timeline;
