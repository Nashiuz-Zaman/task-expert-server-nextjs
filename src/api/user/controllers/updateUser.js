// import
import UserModel from './../../../models/User/User.js';

const updateUser = async (req, res) => {
   try {
      const updateData = req.body;
      const filter = { email: req.params.email };

      const user = await UserModel.findOne(filter);

      Object.assign(user, updateData);
      const updatedUser = await user.save();

      if (updatedUser) {
         return res.send({ status: 'success', user: updatedUser });
      }
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default updateUser;
