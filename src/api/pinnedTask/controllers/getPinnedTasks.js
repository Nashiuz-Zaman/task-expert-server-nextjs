// imports
import PinnedTaskModel from '../../../models/PinnedTask/PinnedTask.js';

const getPinnedTasks = async (req, res) => {
   try {
      const email = req.query.email;

      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      const filter = { email: email };
      const pinnedTasks = await PinnedTaskModel.find(filter);

      return res.send({ status: 'success', pinnedTasks });
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default getPinnedTasks;
