// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';
import setCookie from '../../../utils/setCookie.js';

const googleLoginAuthCheck = async (req, res) => {
   const googleUser = req.body;

   // check if google user exists
   const user = await UserModel.findOne({ email: googleUser.email });
   const token = generateToken({ email: googleUser.email });

   //
   if (user) {
      // set cookie
      setCookie(res, token);
      return res.send({ success: true, user, tokenExists: true });
   } else {
      // if no user is found in the database create the new user object in mongodb as user
      const newGoogleUser = {
         name: googleUser.name,
         email: googleUser.email,
         password: 'google-account',
         imageSource: googleUser.image,
         role: 'user',
      };

      // create new user document in collection
      const newCreatedUser = await UserModel.create(newGoogleUser);
      if (newCreatedUser._id) {
         // set cookie
         setCookie(res, token);

         return res.send({
            success: true,
            tokenExists: true,
            user: newCreatedUser,
         });
      }
   }
};

export default googleLoginAuthCheck;
