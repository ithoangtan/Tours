const { check, validationResult } = require("express-validator");

const Notification = require("../models/notification.model");

exports.listAll = async (req, res, next) => {
  try {
    listNotification = await Notification.getAllNotification();
    res.status(200).json(listNotification);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.listNotificationSearch = async function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  const searchs = {
    keySearch: req.body.keySearch,
    dayTime: req.body.dayTime,
    conditional: req.body.conditional,
  };
  try {
    listNotification = await Notification.getAllNotificationSearch(searchs);
    res.status(200).json(listNotification);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    const { idNotification } = req.query;
    notification = await Notification.getNotificationById(idNotification);
    res.status(200).json(notification);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newNotification = new Notification(req.body);
    resultCreate = await Notification.createNotification(newNotification);
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
    const updateNotification = req.body;
    updateResult = await Notification.updateById(updateNotification);
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
    const { idNotification } = req.query;
    deleteResult = await Notification.remove(idNotification);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
