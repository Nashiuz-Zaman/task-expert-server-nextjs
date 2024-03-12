// import
import generateToken from '../../../utils/generateToken.js';
import UserModel from './../../../models/User/User.js';

const createUser = async (req, res) => {
   const user = req.body;
   user.loggedIn = true;

   // create user
   const { password, ...newCreatedUser } = await UserModel.create(user);

   // if user created successfully generate token
   if (newCreatedUser._id) {
      const token = generateToken({ email: user.email });

      return res.send({
         status: 'success',
         token,
         user: newCreatedUser,
      });
   }
};

export default createUser;
