const update = async (req, res) => {
  const {
    session,
    db: { Posts },
    params: { id },
    body: { content },
  } = req;

  const updatePost = await Posts.update(content, id);
  res.send(updatePost);
};

module.exports = update;
