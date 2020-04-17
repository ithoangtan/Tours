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

exports.listPostSearch = async function (req, res) {
  //Nên dùng express-validator để validator dữ liệu trước
  //Nhưng vì không có thời gian nên khoan làm
  //https://express-validator.github.io/docs/
  const searchs = {
    keySearch: req.body.keySearch,
    vote: req.body.vote,
    conditional: req.body.conditional,
  };
  try {
    listPost = await Post.getAllPostSearch(searchs);
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
  let updatePost = removeBlankAttributes.remove(req.body);
  try {
    // const updatePost = removeBlankAttributes.remove(new Post(req.body));
    if (updatePost.tags) updatePost.tags = JSON.stringify(updatePost.tags);
    updateResult = await Post.updateById(updatePost);
    res.status(200).json(updateResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.putTags = async (req, res, next) => {
  let updatePost = removeBlankAttributes.remove(new Post(req.body));
  updatePost.tags = JSON.stringify(req.body.tags);
  console.log(updatePost);

  try {
    updateResult = await Post.updateById(updatePost);
    res.status(200).json(updateResult);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    res.status(500).json(err);
  }
};

exports.votePost = async (req, res, next) => {
  try {
    const { idPost, vote } = req.body;
    RowDataPacket = await Post.getPostById(idPost);
    const oldVote = RowDataPacket[0].vote;
    // calulate vote
    const newVote = ((parseInt(vote) + parseInt(oldVote)) / 2).toFixed(0);
    const updatePost = removeBlankAttributes.remove(
      new Post({ ...req.body, vote: newVote })
    );

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
