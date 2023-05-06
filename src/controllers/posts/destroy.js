const destroy = async (req, res) => {
  const {
    db: { Posts },
    params: { id },
  } = req;
    const result = await Posts.delete(Number(id));
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;