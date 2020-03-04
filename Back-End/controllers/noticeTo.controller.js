const { check, validationResult } = require("express-validator");

const NoticeTo = require("../models/noticeTo.model");

exports.create = async (req, res, next) => {
  try {
    const newNoticeTo = new NoticeTo(req.body);
    resultCreate = await NoticeTo.createNoticeTo(newNoticeTo);
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
    const updateNoticeTo = new NoticeTo(req.body);
    updateResult = await NoticeTo.updateById(updateNoticeTo);
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
    const { idNoticeTo } = req.query;
    deleteResult = await NoticeTo.remove(idNoticeTo);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
