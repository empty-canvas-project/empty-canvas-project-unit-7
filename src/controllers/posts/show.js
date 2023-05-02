const showUser = async (req, res) => {
  const {
    db: { Posts },
    params: { id },
  } = req;
  console.log(req.db)

  const posts = await Posts.find(id);
  if (!posts) return res.sendStatus(404);

  res.send(posts);
};

module.exports = showUser;
