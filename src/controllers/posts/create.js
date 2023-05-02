const createUser = async (req, res) => {
  const {
    session,
    db: { Posts },
    body: { content, title },
  } = req;

  const posts = await Posts.create(content, title);

  res.send(posts);
};

module.exports = createUser;
