const { check, validationResult } = require("express-validator");

const Timeline = require("../models/timeline.model");

exports.listAll = async function(req, res) {
  try {
    listTimeline = await Timeline.getAllTimeline();
    res.status(200).json(listTimeline);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.listTimelineSearch = async function(req, res) {
  const searchs = {
    keySearch: req.body.keySearch,
    date: req.body.date,
  };
  try {
    listTimeline = await Timeline.getAllTimelineSearch(searchs);
    res.status(200).json(listTimeline);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    if (req.query.idTimelines) {
      timeline = await Timeline.getTimelineById(req.query.idTimelines);
    } else if (req.query.idTour) {
      timeline = await Timeline.getTimelineByIdTour(req.query.idTour);
    }
    res.status(200).json(timeline);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newTimeline = new Timeline(req.body);
    resultCreate = await Timeline.createTimeline(newTimeline);
    res.status(200).json(resultCreate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updateTimeline = new Timeline(req.body);
    updateResult = await Timeline.updateById(updateTimeline);
    res.status(200).json(updateResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { idTimelines } = req.query;
    deleteResult = await Timeline.remove(idTimelines);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
