const database = require("../dbconnectMySql");

//Task object constructor
const Post = function (post) {
  this.idPost = post.idPost | 0;
  this.idAccount = post.idAccount;
  this.contentPost = post.contentPost;
  this.status = post.status;
  this.vote = post.vote;
  this.titlePost = post.titlePost;
  this.describe = post.describe;
  this.type = post.type;
  this.tags = post.tags;
  this.views = post.views;
  // this.dateTime = post.dateTime.slice(0, 10).replace(/-/g, "/");
};

const databaseLocal = "azmszdk4w6h5j1o6";
const databaseProduction =
  process.env.NODE_ENV === "production"
    ? process.env.JAWSDB_DATABASE
    : databaseLocal;

Post.getAllPost = function (funcResult) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".posts WHERE statusAction <> 'deleted';"
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Post.getAllPostSearch = function (searchs) {
  if (searchs.conditional === "content") {
    return new Promise(function (resolve, reject) {
      database
        .query(
          "call " +
            databaseProduction +
            `.spsearchEnginePostByContent( '${searchs.keySearch}' ); `
        )
        .then((rows) => resolve(rows))
        .catch((err) => reject(err));
    });
  } else {
    return new Promise(function (resolve, reject) {
      database
        .query(
          "call " +
            databaseProduction +
            `.spsearchEnginePost( '${searchs.keySearch}', ${searchs.vote} ); `
        )
        .then((rows) => resolve(rows))
        .catch((err) => reject(err));
    });
  }
};

Post.createPost = function (newPost) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "INSERT INTO " +
          databaseProduction +
          ".posts (`idAccount`, `contentPost`, `status`, `vote`, `titlePost`, `describe`, `type`, `tags`, `views` ) VALUES ('" +
          newPost.idAccount +
          "', '" +
          newPost.contentPost +
          "', '" +
          newPost.status +
          "', '" +
          newPost.vote +
          "', '" +
          newPost.titlePost +
          "', '" +
          newPost.describe +
          "', '" +
          newPost.type +
          "', '" +
          newPost.tags +
          "', '" +
          newPost.views +
          // "', '" +
          // newPost.dateTime +
          "') "
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Post.getPostById = function (idPost) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "SELECT * FROM " +
          databaseProduction +
          ".posts  WHERE idPost = ? AND statusAction <> 'deleted';",
        [idPost]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Post.updateById = function (updatePost) {
  updatePost = { ...updatePost, statusAction: "edited" };
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " + databaseProduction + ".posts SET ? WHERE (idPost = ?);",
        [updatePost, updatePost.idPost]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

Post.remove = function (idPost) {
  return new Promise(function (resolve, reject) {
    database
      .query(
        "UPDATE " +
          databaseProduction +
          ".posts SET `statusAction` = 'deleted' WHERE idPost = ?",
        [idPost]
      )
      .then((rows) => resolve(rows))
      .catch((err) => reject(err));
  });
};

module.exports = Post;
