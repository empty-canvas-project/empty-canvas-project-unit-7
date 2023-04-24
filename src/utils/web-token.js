const jwt = require('jsonwebtoken');

const createJWT = (userId) => {
  const token = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
  );
  return token;
};

const verifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('WEB TOKEN MALFORMED');
    console.log('error:', error);
    return null;
  }
};

module.exports = {
  createJWT,
  verifyJWT,
};
