const User = require('../db/models/user');
const Posts = require('../db/models/posts');
const Comment = require('../db/models/comments');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Posts,
    Comment
  };
  next();
};

module.exports = addModels;
