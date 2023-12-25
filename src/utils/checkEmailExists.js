// imports
const User = require("../models/User/User");

const checkEmailExists = async (email) => {
  // check if we can find a user with the email
  const user = await User.findOne({ email });

  if (user) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkEmailExists;
