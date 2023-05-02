const showComment = async (req, res) => {
    const {
      db: { Comment },
      params: { id },
    } = req;
    console.log(req.db)
    const comment = await Comment.find(Number(id));
    if (!comment) return res.sendStatus(404);
  
    res.send(comment);
  };
  
  module.exports = showComment;