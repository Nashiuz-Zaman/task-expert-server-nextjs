import TaskModel from './../../../models/Task/Task.js';

const getTasks = async (req, res) => {
   try {
      const email = req.query.email;

      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      const filter = { email: email };
      // const taskInfo = req.body;

      // Change this part when polishing the project in the future
      // if all tasks are wanted, send all tasks sorted by lastUpdated
      // if (taskInfo.status === "all") {
      //   const tasks = await TaskModel.find().sort(sortOption);
      //   return res.send({ success: true, data: tasks });
      // }

      // set the sorting order
      const sortOption = { lastUpdated: 1 };
      const tasks = await TaskModel.find(filter).sort(sortOption);
      return res.send({ status: 'success', data: tasks });
   } catch (error) {
      console.error('Error fetching tasks:', error);
      return res
         .status(500)
         .send({ status: 'error', error: 'Internal Server Error' });
   }
};

export default getTasks;
