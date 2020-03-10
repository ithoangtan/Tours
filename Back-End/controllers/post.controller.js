const { check, validationResult } = require("express-validator");
const removeBlankAttributes = require("../utils/removeBlankAttributes");
const Post = require("../models/post.model");

exports.listAll = async (req, res, next) => {
  try {
    listPost = await Post.getAllPost();
    res.status(200).json(listPost);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.read = async (req, res, next) => {
  try {
    const { idPost } = req.query;
    post = await Post.getPostById(idPost);
    res.status(200).json(post);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    resultCreate = await Post.createPost(newPost);
    res.status(200).json(resultCreate);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  const updatePost = removeBlankAttributes.remove(new Post(req.body));
  console.log(updatePost);
  try {
    // const updatePost = removeBlankAttributes.remove(new Post(req.body));
    updateResult = await Post.updateById(updatePost);
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
    const { idPost } = req.query;
    deleteResult = await Post.remove(idPost);
    res.status(200).json(deleteResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};