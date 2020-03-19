const { check, validationResult } = require("express-validator");

const Service = require("../models/service.model");

exports.listServiceSearch = async function(req, res) {
  const searchs = {
    keySearch: req.body.keySearch,
  };
  try {
    listService = await Service.getAllServiceSearch(searchs);
    res.status(200).json(listService);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    const { idServices } = req.query;
    service = await Service.getServiceById(idServices);
    res.status(200).json(service);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newService = new Service(req.body);
    resultCreate = await Service.createService(newService);
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
    const updateService = new Service(req.body);
    updateResult = await Service.updateById(updateService);
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
    const { idServices } = req.query;
    deleteResult = await Service.remove(idServices);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
