// imports
import PinnedTaskModel from '../../../models/PinnedTask/PinnedTask.js';

const removePinnedTask = async (req, res) => {
   try {
      const filter = { _id: req.params.id };
      const result = await PinnedTaskModel.deleteOne(filter);

      if (!result.deletedCount) {
         return res
            .status(404)
            .send({ status: 'failed', message: 'Task not deleted' });
      }

      return res.send({ status: 'success' });
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default removePinnedTask;
