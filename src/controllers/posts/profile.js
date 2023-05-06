// import user from `../../../public/scripts/profile`
const profile = async (req, res) => {
  let {
    params: { id },
  } = req;
  id = Number(id);
  const { Posts } = req.db;
  const posts = await Posts.singleUserList(id);
  res.send(posts);
};

module.exports = profile;
