const jwt = require('jsonwebtoken');
const userSchema = require('../model/userSchema');

const isLoggedIn = async (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.send({ message: 'Please log in first', success: false });
  }

  try {
    const userData = jwt.verify(token, process.env.SECRET_TOKEN_KEY);

    const user = await userSchema.findOne({ _id: userData.userId });

    if (!user) {
      return res.send({ message: 'Unauthorized token', success: false });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.send({ message: error.message, success: false });
  }
};

module.exports = { isLoggedIn };
