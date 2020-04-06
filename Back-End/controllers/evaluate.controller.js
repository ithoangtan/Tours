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

function calAverageRateEvaluate(evaluate) {
  const rate = (
    (evaluate.numberStarHotel +
      evaluate.numberStarFood +
      evaluate.numberStarVehicle +
      evaluate.numberStarTourGuide +
      evaluate.numberStarSchedule) /
    5
  ).toFixed(0);
  let rateTitle = "Rất tệ";
  switch (parseInt(rate)) {
    case 5:
      rateTitle = "Tuyệt vời";
      break;
    case 4:
      rateTitle = "Rất ổn";
      break;
    case 3:
      rateTitle = "Bình thường";
      break;
    case 2:
      rateTitle = "Tạm ổn";
      break;
    default:
      break;
  }
  return { rateAverage: rate, rateTitle };
}

exports.create = async (req, res, next) => {
  try {
    const rateAverage = calAverageRateEvaluate(req.body);
    const newEvaluate = new Evaluate({ ...req.body, ...rateAverage });
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
    const rateAverage = calAverageRateEvaluate(req.body);
    const { idAccount } = req;
    const updateEvaluate = new Evaluate({
      ...req.body,
      idAccount,
      ...rateAverage,
    });
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
