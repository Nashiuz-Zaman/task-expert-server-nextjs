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

      // set the sorting order
      const sortOption = { lastUpdated: 1 };
      const tasks = await TaskModel.find(filter).sort(sortOption);
      return res.send({ status: 'success', tasks });
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error', customErrMessage: error.message });
   }
};

export default getTasks;
