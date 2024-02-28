import PinnedTaskModel from '../../../models/PinnedTask/PinnedTask.js';

const addPinnedTask = async (req, res) => {
   try {
      const newPinnedTask = req.body;
      const filter = { email: newPinnedTask.email };
      // create task
      const newlyPinnedTask = await PinnedTaskModel.create(newPinnedTask);

      if (newlyPinnedTask._id) {
         // set the sorting order
         const sortOption = { lastUpdated: 1 };
         const pinnedTasks = await PinnedTaskModel.find(filter).sort(
            sortOption
         );
         return res.send({ status: 'success', pinnedTasks });
      }
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default addPinnedTask;
