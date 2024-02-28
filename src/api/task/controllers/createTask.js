import TaskModel from './../../../models/Task/Task.js';

const createTask = async (req, res) => {
   try {
      const newTask = req.body;
      const filter = { email: newTask.email };
      // create task
      const newCreatedTask = await TaskModel.create(newTask);

      if (newCreatedTask._id) {
         // set the sorting order
         const sortOption = { lastUpdated: 1 };
         const tasks = await TaskModel.find(filter).sort(sortOption);
         return res.send({ status: 'success', tasks });
      }
   } catch (error) {
      console.error('Error fetching tasks:', error);
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default createTask;
