// import
import UserModel from './../../../models/User/User.js';

const updateUser = async (req, res) => {
   try {
      // verify
      const email = req.params.email;
      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      // gather
      const updateData = req.body;
      const filter = { email };
      const user = await UserModel.findOne(filter);

      Object.assign(user, updateData);
      const {
         _doc: { password, loggedIn, ...updatedUser },
      } = await user.save();

      if (updatedUser._id) {
         return res.send({ status: 'success', user: updatedUser });
      }
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default updateUser;
