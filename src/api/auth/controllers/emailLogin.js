// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';
import setCookie from '../../../utils/setCookie.js';

const emailLogin = async (req, res) => {
   const { email } = req.body;

   // find user
   const user = await UserModel.findOne({ email: email });

   // generate jwt and set cookie
   const token = generateToken({ email });
   setCookie(res, token);

   return res.send({ success: true, user, tokenExists: true });
};

export default emailLogin;
