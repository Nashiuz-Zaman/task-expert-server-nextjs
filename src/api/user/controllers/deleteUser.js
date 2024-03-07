// import
import UserModel from './../../../models/User/User.js';
import TaskModel from './../../../models/Task/Task.js';
import PinnedTaskModel from '../../../models/PinnedTask/PinnedTask.js';

const deleteUser = async (req, res) => {
   try {
      const filter = { email: req.params.email };
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
         res.send({ status: 'success' });
      }
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default deleteUser;
