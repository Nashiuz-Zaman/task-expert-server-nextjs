// imports
import UserModel from '../../../models/User/User.js';

const initialAuthValidation = async (req, res) => {
   const { email } = req.decoded;
   const user = await UserModel.findOne({ email: email }).select('-password -role');

   return res.send({status:'success', user });
};

export default initialAuthValidation;
