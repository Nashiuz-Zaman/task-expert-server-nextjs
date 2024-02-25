// import
import generateToken from '../../../utils/generateToken.js';
import setCookie from '../../../utils/setCookie.js';
import UserModel from './../../../models/User/User.js';

const createUser = async (req, res) => {
   const user = req.body;
   // create user
   const newCreatedUser = await UserModel.create(user);

   // if user created successfully generate token
   if (newCreatedUser._id) {
      const token = generateToken({ email: user.email });

      // set cookie
      setCookie(res, token);
      return res.send({
         success: true,
         tokenExists: true,
         user: newCreatedUser,
      });
   }
};

export default createUser;
