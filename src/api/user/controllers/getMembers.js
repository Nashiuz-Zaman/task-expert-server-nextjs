// import
const User = require("../../../models/User/User");

const getMembers = async (req, res) => {
  const filter = { role: "member" };
  const members = await User.find(filter);

  res.send(members);
};

module.exports = getMembers;
