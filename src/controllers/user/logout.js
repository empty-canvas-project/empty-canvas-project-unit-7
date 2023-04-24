const logoutUser = (req, res) => {
  req.session.destroy();
  res.sendStatus(204);
};

module.exports = logoutUser;
