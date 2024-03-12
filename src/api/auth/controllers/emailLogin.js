// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';

const emailLogin = async (req, res) => {
   const { email } = req.body;

   // find user
   const user = await UserModel.findOne({ email });
   user.loggedIn = true;
   const { password, ...updatedUser } = await user.save();

   const token = generateToken({ email });
   return res.send({ status: 'success', user: updatedUser, token });
};

export default emailLogin;
