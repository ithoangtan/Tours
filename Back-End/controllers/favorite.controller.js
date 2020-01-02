const { check, validationResult } = require("express-validator");

const Farovite = require("../models/favorite.model");

exports.listAll = async (req, res, next) => {
  try {
    listFarovite = await Farovite.getAll();
    res.status(200).json(listFarovite);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    favorite = await Farovite.getById();
    res.status(200).json(favorite);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.readByEmail = async (req, res, next) => {
  try {
    favorite = await Farovite.getByEmail(req.query.email);
    res.status(200).json(favorite);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newFarovite = new Farovite(req.body);
    resultCreate = await Farovite.create(newFarovite);
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
    const updateFarovite = new Farovite(req.body);
    updateResult = await Farovite.updateById(updateFarovite);
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
    deleteResult = await Farovite.remove(req.query.idFarovite);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
