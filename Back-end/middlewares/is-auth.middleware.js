const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    res.status(500).json(error)
    throw error;
  }
  const token = authHeader;
  console.log(token)
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'somesupersecretsecret');
    console.log(decodedToken)
  } catch (err) {
    err.statusCode = 500;
    res.status(500).json(err)
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    res.status(500).json(error)
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};
