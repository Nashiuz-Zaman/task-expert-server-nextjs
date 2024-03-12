// imports
import UserModel from '../../../models/User/User.js';

const logout = async (req, res) => {
   const { email } = req.body;

   const user = await UserModel.findOne({ email });
   user.loggedIn = false;
   const updatedUser = await user.save();

   if (updatedUser._id) {
      return res.send({ status: 'success' });
   }
};

export default logout;
