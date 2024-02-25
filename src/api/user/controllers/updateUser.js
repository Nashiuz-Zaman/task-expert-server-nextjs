// import
import UserModel from './../../../models/User/User.js';

const updateUser = async (req, res) => {
   const email = req.params.email;
   const update = req.body;
   const filter = { email: email };

   const role = update.role;
   const newlyRentedApartment = update.newlyRentedApartment;

   const user = await UserModel.findOneAndUpdate(
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

export default updateUser;
