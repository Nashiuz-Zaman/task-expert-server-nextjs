// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';

const googleLogin = async (req, res) => {
   try {
      const googleUser = req.body;

      // check if google user exists
      const user = await UserModel.findOne({ email: googleUser.email });

      const token = generateToken({ email: googleUser.email });

      if (user?._id) {
         user.loggedIn = true;

         const {
            _doc: { password, loggedIn, ...updatedUser },
         } = await user.save();

         return res.send({ status: 'success', user: updatedUser, token });
      }

      // if no user is found in the database create the new user object in mongodb as user
      const newGoogleUser = {
         name: googleUser.name,
         email: googleUser.email,
         password: 'google-account',
         imageSource: googleUser.image,
         role: 'user',
         loggedIn: true,
      };

      // create new user document in collection
      const {
         _doc: { password, loggedIn, ...newUser },
      } = await UserModel.create(newGoogleUser);

      if (newUser?._id) {
         return res.send({
            status: 'success',
            token,
            user: newUser,
         });
      }
   } catch (error) {
      return res.status(500).send({ status: 'error'});
   }
};

export default googleLogin;
