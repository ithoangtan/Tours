const Report = require("../models/report.model");

exports.getReport = async (req, res, next) => {
  try {
    let listReport = await Report.getReport();
    res.status(200).json(listReport);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.getDestinationByTime = async (req, res, next) => {
  try {
    const { month } = req.query;
    let listReport = await Report.getDestinationByTime(month);
    res.status(200).json(listReport);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
