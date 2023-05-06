const listPosts = async (req, res) => {
  const { Posts } = req.db;
  const posts = await Posts.list();
  res.send(posts);
};

module.exports = listPosts;
 
