// import
const User = require("../../../models/User/User");
const generateToken = require("../../../utils/generateToken");

const authCheck = async (req, res) => {
  // take email
  const { email } = req.body;

  // find user
  const user = await User.findOne({ email: email });

  // generate jwt
  const token = generateToken({ email });

  // send to client
  return res.send({ success: true, user, token });
};

module.exports = authCheck;
