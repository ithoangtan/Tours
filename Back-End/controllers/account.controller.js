const { check, validationResult } = require("express-validator");

const Account = require("../models/account.model");

exports.listAll = async (req, res, next) => {
  try {
    listAccount = await Account.getAll();
    res.status(200).json(listAccount);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    account = await Account.getById();
    res.status(200).json(account);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newAccount = new Account(req.body);
    resultCreate = await Account.create(newAccount);
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
    const updateAccount = new Account(req.body);
    updateResult = await Account.updateById(updateAccount);
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
    deleteResult = await Account.remove(req.query.idAccount);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
