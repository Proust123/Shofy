const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const { createToken } = require('../utilities/createToken');

const signup = async (req, res) => {
  let response = await userSchema.findOne({ email: req.body.email });

  if (response) {
    res.send({ message: 'User already exists', success: false });
  } else {
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = encryptedPassword;

    response = await userSchema.create(req.body);

    if (response) {
      res.send({ message: 'New user created', success: true });
    }
  }
};

const login = async (req, res) => {
  const response = await userSchema.findOne({ email: req.body.email });

  if (!response) {
    return res.send({ message: 'User Not Found!', success: false });
  }

  var isMatched = await bcrypt.compare(req.body.password, response.password);

  if (!isMatched) {
    return res.send({ message: 'Invalid Password!', success: false });
  }
  // console.log(req);

  var token = createToken(response._id);

  // console.log(token, '...token');

  res.send({
    message: 'Login Successfull',
    token,
    user: response,
    success: true,
  });
};

const change = async (req, res) => {
  let response = await userSchema.findOne({ email: req.user.email });
  const isMatched = await bcrypt.compare(req.body.old, response.password);

  console.log(req.body);
  console.log(isMatched);

  if (isMatched) {
    await userSchema.findOneAndUpdate(
      { email: req.user.email },
      {
        $set: {
          password: await bcrypt.hash(req.body.new, 10),
        },
      },
      { new: true },
    );
    console.log('matched');

    res.send({ message: 'Password Changed', success: true });
  } else {
    console.log('not matched');

    res.send({ message: 'Password do not match', success: false });
  }
};

const allUsers = async (req, res) => {
  const response = await userSchema.find();

  res.send(response);
};

module.exports = { signup, login, allUsers, change };
