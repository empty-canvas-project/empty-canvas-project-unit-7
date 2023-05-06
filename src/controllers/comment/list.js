const listComment = async (req, res) => {
    const { Comment } = req.db;
    const comment = await Comment.list();
    res.send(comment);
  };
  
  module.exports = listComment;