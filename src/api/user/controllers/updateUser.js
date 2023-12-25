// import
const User = require("../../../models/User/User");

const updateUser = async (req, res) => {
  const email = req.params.email;
  const update = req.body;
  const filter = { email: email };

  const role = update.role;
  const newlyRentedApartment = update.newlyRentedApartment;

  const user = await User.findOneAndUpdate(
    filter,
    {
      $set: { role: role },
      $push: { rentedApartments: newlyRentedApartment },
    },
    {
      new: true,
    }
  );

  if (user) {
    return res.send({ success: true });
  }
};

module.exports = updateUser;
