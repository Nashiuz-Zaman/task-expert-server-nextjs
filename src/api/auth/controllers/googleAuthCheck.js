// imports
const User = require("../../../models/User/User");
const generateToken = require("../../../utils/generateToken");

const googleAuthCheck = async (req, res) => {
  const googleUser = req.body;

  // check if google user exists
  const user = await User.findOne({ email: googleUser.email });
  const token = generateToken({ email: googleUser.email });

  //
  if (user) {
    return res.send({ success: true, user, token });
  } else {
    // if no user create the new user object in mongodb as user
    const newGoogleUser = {
      name: googleUser.name,
      email: googleUser.email,
      password: "google-account",
      imageSource: googleUser.image,
      role: "user",
    };

    const newCreatedUser = await User.create(newGoogleUser);
    if (newCreatedUser._id) {
      return res.send({
        success: true,
        token,
        user: newCreatedUser,
      });
    }
  }
};

module.exports = googleAuthCheck;
