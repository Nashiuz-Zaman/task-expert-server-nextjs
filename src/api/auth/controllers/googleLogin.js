// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';

const googleLogin = async (req, res) => {
   const googleUser = req.body;

   // check if google user exists
   const user = await UserModel.findOne({ email: googleUser.email }).select('-password -role');
   const token = generateToken({ email: googleUser.email });

   if (user) {
      return res.send({ status: 'success', user, token });
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
         
         const {role,password, ...user} = newCreatedUser

         return res.send({
            status: 'success',
            token,
            user
         });
      }
   }
};

export default googleLogin;
