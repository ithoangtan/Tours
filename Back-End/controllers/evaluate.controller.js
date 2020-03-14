const { check, validationResult } = require("express-validator");

const Evaluate = require("../models/evaluate.model");

exports.read = async (req, res, next) => {
  try {
    const { idEvaluate } = req.query;
    evaluate = await Evaluate.getEvaluateById(idEvaluate);
    res.status(200).json(evaluate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.readByIdTour = async (req, res, next) => {
  try {
    const { idTour } = req.query;
    evaluate = await Evaluate.getEvaluateByIdTour(idTour);
    res.status(200).json(evaluate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newEvaluate = new Evaluate(req.body);
    resultCreate = await Evaluate.createEvaluate(newEvaluate);
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
    const updateEvaluate = new Evaluate(req.body);
    updateResult = await Evaluate.updateById(updateEvaluate);
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
    const { idEvaluate } = req.query;
    deleteResult = await Evaluate.remove(idEvaluate);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
