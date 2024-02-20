// imports
const User = require("../../../models/User/User");
const generateToken = require("../../../utils/generateToken");
const setCookie = require("../../../utils/setCookie");

const emailLoginAuthCheck = async (req, res) => {
  // take email
  const { email } = req.body;

  // find user
  const user = await User.findOne({ email: email });

  // generate jwt
  const token = generateToken({ email });

  // set cookie
  setCookie(res, token);

  // send to client
  return res.send({ success: true, user, tokenExists: true });
};

module.exports = emailLoginAuthCheck;
