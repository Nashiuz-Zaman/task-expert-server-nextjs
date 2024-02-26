// imports
import UserModel from '../../../models/User/User.js';

const initialAuthValidation = async (req, res) => {
   const { email } = req.decoded;
   const user = await UserModel.findOne({ email: email }).select('-password');

   return res.send({ user });
};

export default initialAuthValidation;
