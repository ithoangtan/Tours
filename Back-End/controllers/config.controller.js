const Config = require("../models/config.model");

exports.listAll = async function (req, res) {
  try {
    listConfig = await Config.getAllConfig();
    res.status(200).json(listConfig);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.listConfigSearch = async function (req, res) {
  const searchs = {
    keySearch: req.body.keySearch,
  };
  try {
    listConfig = await Config.getAllConfigSearch(searchs);
    res.status(200).json(listConfig);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    const { idConfig, infoType } = req.query;
    let config = {};
    if (idConfig) config = await Config.getConfigById(idConfig);
    else if (infoType) config = await Config.getConfigByInfoType(infoType);
    res.status(200).json(config[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    newConfig = new Config(req.body);
    newConfig.configs = JSON.stringify(newConfig.configs);
    resultCreate = await Config.createConfig(newConfig);
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
    updateConfig = req.body;
    updateConfig.configs = JSON.stringify(updateConfig.configs);
    updateResult = await Config.updateById(updateConfig);
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
    const { idConfig } = req.query;
    deleteResult = await Config.remove(idConfig);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
