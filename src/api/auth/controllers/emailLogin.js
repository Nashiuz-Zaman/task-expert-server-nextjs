// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';

const emailLogin = async (req, res) => {
   const { email } = req.body;

   // find user
   const user = await UserModel.findOne({ email: email }).select('-password -role');
   const token = generateToken({ email });
   return res.send({ status: 'success', user, token });
};

export default emailLogin;
