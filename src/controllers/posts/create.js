const create = async (req, res) => {
  const {
    db: { Posts },
    body: { user_id, content, artist, title, cover, preview },
  } = req;
  console.log(req.body)
  const postData = { user_id, content, artist, title, cover, preview };
  const posts = await Posts.create(postData);

  res.send(posts);
};

module.exports = create;
