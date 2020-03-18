const { check, validationResult } = require("express-validator");

const Tag = require("../models/tag.model");

exports.read = async (req, res, next) => {
  try {
    const { idTag } = req.query;
    tag = await Tag.getTagById(idTag);
    res.status(200).json(tag);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newTag = new Tag(req.body);
    resultCreate = await Tag.createTag(newTag);
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
    const updateTag = new Tag(req.body);
    updateResult = await Tag.updateById(updateTag);
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
    const { idTag } = req.query;
    deleteResult = await Tag.remove(idTag);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};
