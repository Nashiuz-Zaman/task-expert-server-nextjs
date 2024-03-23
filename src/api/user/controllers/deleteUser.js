// import
import UserModel from './../../../models/User/User.js';
import TaskModel from './../../../models/Task/Task.js';
import PinnedTaskModel from '../../../models/PinnedTask/PinnedTask.js';

const deleteUser = async (req, res) => {
   try {
      // verify
      const email = req.params.email;
      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      const filter = { email };
      const userDeletePromise = UserModel.deleteOne(filter);
      const taskDeletePromise = TaskModel.deleteMany(filter);
      const pinnedTaskDeletePromise = PinnedTaskModel.deleteMany(filter);

      const [userDeleteRes, taskDeleteRes, pinnedTaskDeleteRes] =
         await Promise.all([
            userDeletePromise,
            taskDeletePromise,
            pinnedTaskDeletePromise,
         ]);

      if (userDeleteRes.deletedCount) {
        return res.send({ status: 'success' });
      }
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default deleteUser;
